import { Box } from "@mui/material";
import ChatMenu from "./chat-menu/ChatMenu";
import Message from "./message/Message";
import MessageForm from "./message-form/MessageForm";

export default function Chat() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          mt: 1,
          mb: 12,
        }}
      >
        <ChatMenu />
      </Box>

      <Box sx={{ display: "flex", flexDirection: 'column', gap: 2 }}>
        <Message />
        <Message />
      </Box>

      <MessageForm />
    </Box>
  );
}
