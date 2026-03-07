import { Box, TextField, IconButton, Paper } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import useLanguage from "../../../hooks/useLanguage";

export default function MessageForm() {
  const language = useLanguage();

  return (
    <Box
      sx={{
        m: { xs: 1, sm: 1.5, md: 2 },
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          mx: "auto",
          mt: { xs: 3, sm: 4, md: 5 },
          p: { xs: 1, sm: 1.25, md: 1.5 },
          backgroundColor: "background.paper",
          borderRadius: 1.5,
          border: "1px solid",
          borderColor: "divider",
          boxShadow: "0 10px 28px rgba(0, 15, 8, 0.12)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 1, sm: 1.25, md: 1.5 },
          }}
        >
          <TextField
            variant="outlined"
            fullWidth
            size="small"
            placeholder={`${language.enterMessage}...`}
            sx={{
              backgroundColor: "base.light",
              borderRadius: 1,
              minWidth: 0,
              "& .MuiOutlinedInput-root": {
                minHeight: { xs: 42, sm: 44 },
                paddingRight: 1,
                "& fieldset": {
                  borderColor: "divider",
                },
                "&:hover fieldset": {
                  borderColor: "primary.main",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "primary.main",
                  borderWidth: "1px",
                },
              },
              "& .MuiInputBase-input": {
                fontSize: { xs: "0.9rem", sm: "0.95rem" },
                py: { xs: 1.15, sm: 1.2 },
              },
            }}
          />

          <IconButton
            sx={{
              width: { xs: 38, sm: 40, md: 42 },
              height: { xs: 38, sm: 40, md: 42 },
              flexShrink: 0,
              borderRadius: 1,
              color: "primary.contrastText",
              backgroundColor: "primary.main",
              boxShadow: "0 6px 16px rgba(28, 55, 56, 0.35)",
              transition: "all 160ms ease",
              "&:hover": {
                backgroundColor: "base.mid",
                boxShadow: "0 8px 22px rgba(28, 55, 56, 0.45)",
                transform: "translateY(-1px)",
              },
            }}
          >
            <SendIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />
          </IconButton>
        </Box>
      </Paper>
    </Box>
  );
}