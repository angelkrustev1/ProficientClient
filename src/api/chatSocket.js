const WS_BASE_URL = "ws://127.0.0.1:8000";
const AUTH_KEY = "auth";

function getStoredAuth() {
  const authData = localStorage.getItem(AUTH_KEY);

  if (!authData) {
    return null;
  }

  try {
    return JSON.parse(authData);
  } catch {
    return null;
  }
}

export function createCourseChatSocket(courseId, handlers = {}) {
  const auth = getStoredAuth();
  const token = auth?.accessToken;

  if (!token) {
    throw new Error("Missing access token for chat connection.");
  }

  const socketUrl = `${WS_BASE_URL}/ws/courses/${courseId}/chat/?token=${encodeURIComponent(token)}`;
  const socket = new WebSocket(socketUrl);

  socket.onopen = (event) => {
    handlers.onOpen?.(event);
  };

  socket.onmessage = (event) => {
    try {
      const data = JSON.parse(event.data);
      handlers.onMessage?.(data);
    } catch (error) {
      handlers.onError?.(error);
    }
  };

  socket.onerror = (event) => {
    handlers.onError?.(event);
  };

  socket.onclose = (event) => {
    handlers.onClose?.(event);
  };

  return socket;
}
