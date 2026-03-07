import { Box } from "@mui/material";
import ChatMenu from "./chat-menu/ChatMenu";
import Message from "./message/Message";
import MessageForm from "./message-form/MessageForm";

export default function Chat() {
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
        <ChatMenu />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: 1.5, sm: 2 },
          minWidth: 0,
        }}
      >
        <Message />
        <Message />
      </Box>

      <Box sx={{ mt: { xs: 2, sm: 2.5, md: 3 } }}>
        <MessageForm />
      </Box>
    </Box>
  );
}