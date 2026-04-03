import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router";
import {
  createCourseMessage,
  deleteCourseMessage,
  getCourseMessages,
  likeCourseMessage,
  unlikeCourseMessage,
} from "../api/chatApi";
import { createCourseChatSocket } from "../api/chatSocket";

const AUTH_KEY = "auth";

function getCurrentUserFromStorage() {
  const authData = localStorage.getItem(AUTH_KEY);

  if (!authData) {
    return null;
  }

  try {
    const parsed = JSON.parse(authData);

    return {
      email: parsed?.email ?? "",
      accessToken: parsed?.accessToken ?? "",
    };
  } catch {
    return null;
  }
}

function sortMessages(messages, order) {
  const sorted = [...messages];

  sorted.sort((a, b) => {
    const first = new Date(a.created_at).getTime();
    const second = new Date(b.created_at).getTime();

    return order === "newest" ? second - first : first - second;
  });

  return sorted;
}

function upsertMessage(messages, incomingMessage) {
  const exists = messages.some((message) => message.id === incomingMessage.id);

  if (exists) {
    return messages.map((message) =>
      message.id === incomingMessage.id ? { ...message, ...incomingMessage } : message
    );
  }

  return [incomingMessage, ...messages];
}

export default function useCourseChat() {
  const { courseId } = useParams();

  const [messages, setMessages] = useState([]);
  const [order, setOrder] = useState("newest");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const socketRef = useRef(null);
  const reconnectTimeoutRef = useRef(null);

  const currentUser = useMemo(() => getCurrentUserFromStorage(), []);

  const loadMessages = useCallback(async () => {
    if (!courseId) {
      setMessages([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const result = await getCourseMessages(courseId);
      setMessages(Array.isArray(result) ? result : []);
    } catch (err) {
      setError(err.message || "Failed to load messages.");
    } finally {
      setLoading(false);
    }
  }, [courseId]);

  useEffect(() => {
    loadMessages();
  }, [loadMessages]);

  useEffect(() => {
    if (!courseId || !currentUser?.accessToken) {
      return undefined;
    }

    let manuallyClosed = false;

    const connectSocket = () => {
      try {
        socketRef.current = createCourseChatSocket(courseId, {
          onOpen: () => {
            setError("");
          },
          onMessage: (event) => {
            if (event?.type === "connection_established") {
              return;
            }

            if (event?.type === "message_created" && event.message) {
              setMessages((prev) => upsertMessage(prev, event.message));
              return;
            }

            if (event?.type === "message_deleted" && event.message_id) {
              setMessages((prev) =>
                prev.filter((message) => message.id !== event.message_id)
              );
              return;
            }

            if (event?.type === "message_reaction_updated" && event.message_id) {
              setMessages((prev) =>
                prev.map((message) => {
                  if (message.id !== event.message_id) {
                    return message;
                  }

                  const updatedMessage = {
                    ...message,
                    likes_count:
                      typeof event.likes_count === "number"
                        ? event.likes_count
                        : message.likes_count,
                  };

                  if (
                    currentUser?.email &&
                    event.acted_by_email &&
                    currentUser.email === event.acted_by_email
                  ) {
                    updatedMessage.liked_by_me = Boolean(event.liked);
                  }

                  return updatedMessage;
                })
              );
            }
          },
          onError: () => {
            // Keep silent here so temporary websocket handshake/reconnect
            // issues do not show as a visible chat error.
          },
          onClose: () => {
            if (manuallyClosed) {
              return;
            }

            reconnectTimeoutRef.current = setTimeout(() => {
              connectSocket();
            }, 2000);
          },
        });
      } catch (err) {
        setError(err.message || "Failed to connect to chat.");
      }
    };

    connectSocket();

    return () => {
      manuallyClosed = true;

      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
      }

      if (
        socketRef.current &&
        (socketRef.current.readyState === WebSocket.OPEN ||
          socketRef.current.readyState === WebSocket.CONNECTING)
      ) {
        socketRef.current.close();
      }
    };
  }, [courseId, currentUser]);

  const orderedMessages = useMemo(() => {
    return sortMessages(messages, order);
  }, [messages, order]);

  async function sendMessage(content) {
    const trimmed = content.trim();

    if (!trimmed || !courseId) {
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const createdMessage = await createCourseMessage(courseId, trimmed);
      setMessages((prev) => upsertMessage(prev, createdMessage));
    } catch (err) {
      setError(err.message || "Failed to send message.");
      throw err;
    } finally {
      setSubmitting(false);
    }
  }

  async function removeMessage(messageId) {
    if (!courseId) {
      return;
    }

    setError("");

    try {
      await deleteCourseMessage(courseId, messageId);
      setMessages((prev) => prev.filter((message) => message.id !== messageId));
    } catch (err) {
      setError(err.message || "Failed to delete message.");
      throw err;
    }
  }

  async function toggleLike(messageId, likedByMe) {
    setError("");

    try {
      let result;

      if (likedByMe) {
        result = await unlikeCourseMessage(messageId);

        setMessages((prev) =>
          prev.map((message) =>
            message.id === messageId
              ? {
                  ...message,
                  liked_by_me: false,
                  likes_count:
                    typeof result?.likes_count === "number"
                      ? result.likes_count
                      : Math.max(0, message.likes_count - 1),
                }
              : message
          )
        );
      } else {
        result = await likeCourseMessage(messageId);

        setMessages((prev) =>
          prev.map((message) =>
            message.id === messageId
              ? {
                  ...message,
                  liked_by_me: true,
                  likes_count:
                    typeof result?.likes_count === "number"
                      ? result.likes_count
                      : message.likes_count + 1,
                }
              : message
          )
        );
      }
    } catch (err) {
      setError(err.message || "Failed to update like.");
      throw err;
    }
  }

  function isMyMessage(message) {
    if (!currentUser?.email || !message?.author_email) {
      return false;
    }

    return currentUser.email === message.author_email;
  }

  return {
    messages: orderedMessages,
    order,
    setOrder,
    loading,
    submitting,
    error,
    sendMessage,
    removeMessage,
    toggleLike,
    isMyMessage,
  };
}