import {
  Alert,
  Box,
  CircularProgress,
  Typography,
} from "@mui/material";
import ChatMenu from "./chat-menu/ChatMenu";
import Message from "./message/Message";
import MessageForm from "./message-form/MessageForm";
import useCourseChat from "../../hooks/useCourseChat";

export default function Chat() {
  const {
    messages,
    order,
    setOrder,
    loading,
    submitting,
    error,
    sendMessage,
    removeMessage,
    toggleLike,
    isMyMessage,
  } = useCourseChat();

  return (
    <Box
      sx={{
        width: "100%",
        minWidth: 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          mt: { xs: 0.5, sm: 1 },
          mb: { xs: 4, sm: 6, md: 8, lg: 12 },
        }}
      >
        <ChatMenu order={order} onChangeOrder={setOrder} />
      </Box>

      {error ? (
        <Alert
          severity="error"
          sx={{
            mb: 2,
            borderRadius: 2,
          }}
        >
          {error}
        </Alert>
      ) : null}

      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            py: 6,
          }}
        >
          <CircularProgress />
        </Box>
      ) : messages.length === 0 ? (
        <Box
          sx={{
            py: 4,
            textAlign: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            No messages yet.
          </Typography>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 1.5, sm: 2 },
            minWidth: 0,
          }}
        >
          {messages.map((message) => (
            <Message
              key={message.id}
              message={message}
              isMine={isMyMessage(message)}
              onDelete={() => removeMessage(message.id)}
              onToggleLike={() =>
                toggleLike(message.id, message.liked_by_me)
              }
            />
          ))}
        </Box>
      )}

      <Box sx={{ mt: { xs: 2, sm: 2.5, md: 3 } }}>
        <MessageForm onSubmit={sendMessage} submitting={submitting} />
      </Box>
    </Box>
  );
}