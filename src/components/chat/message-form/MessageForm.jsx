import { Box, TextField, IconButton, Paper } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import useLanguage from "../../../hooks/useLanguage";

export default function MessageForm() {
  let language = useLanguage();

  return (
    <Box sx={{ m: 2 }}>
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          mx: "auto",
          mt: 5,
          p: 1.5,

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
            gap: 1.5,
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

              "& .MuiOutlinedInput-root": {
                paddingRight: 1.5,
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
            }}
          />

          <IconButton
            sx={{
              width: 40,
              height: 40,
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
            <SendIcon fontSize="small" />
          </IconButton>
        </Box>
      </Paper>
    </Box>
  );
}
