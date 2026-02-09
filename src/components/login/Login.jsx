import {
  Avatar,
  Box,
  Button,
  IconButton,
  Paper,
  TextField,
  Typography,
  Backdrop,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CloseIcon from "@mui/icons-material/Close";
import useLanguage from "../../hooks/useLanguage";

export default function Login({ open, onClose }) {
  let language = useLanguage();

  return (
    <Backdrop
      open={open}
      onClick={onClose}
      sx={{
        zIndex: "modal",
        bgcolor: "rgba(0, 0, 0, 0.6)",
      }}
    >
      <Box
        onClick={(e) => e.stopPropagation()}
        sx={{
          width: "100%",
          maxWidth: 420,
          mx: 2,
        }}
      >
        <Paper
          elevation={0}
          sx={{
            position: "relative",
            p: 4,

            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2.5,

            backgroundColor: "background.paper",
            color: "text.primary",

            borderRadius: 1.6,
            border: "1px solid",
            borderColor: "divider",

            boxShadow: "0 22px 55px rgba(0, 15, 8, 0.35)",
          }}
        >
          {/* CLOSE */}
          <IconButton
            size="small"
            onClick={onClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "text.secondary",
              "&:hover": {
                bgcolor: "action.hover",
              },
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>

          {/* ICON */}
          <Avatar
            sx={{
              width: 48,
              height: 48,
              borderRadius: 1.5,

              bgcolor: "primary.main",
              color: "primary.contrastText",

              boxShadow: "0 6px 16px rgba(28, 55, 56, 0.35)",
            }}
          >
            <LockOutlinedIcon fontSize="small" />
          </Avatar>

          {/* TITLE */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              letterSpacing: "0.3px",
            }}
          >
            {language.login}
          </Typography>

          {/* FORM (design only) */}
          <Box
            component="form"
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mt: 1,
            }}
          >
            <TextField
              label={language.email}
              type="email"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 1,
                  backgroundColor: "base.light",
                  "& fieldset": {
                    borderColor: "divider",
                  },
                  "&:hover fieldset": {
                    borderColor: "primary.main",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "primary.main",
                  },
                },
              }}
            />

            <TextField
              label={language.password}
              type="password"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 1,
                  backgroundColor: "base.light",
                  "& fieldset": {
                    borderColor: "divider",
                  },
                  "&:hover fieldset": {
                    borderColor: "primary.main",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "primary.main",
                  },
                },
              }}
            />

            <Button
              variant="contained"
              fullWidth
              sx={{
                mt: 1,
                py: 1.4,

                borderRadius: 1,
                textTransform: "none",
                fontWeight: 600,

                backgroundColor: "primary.main",
                boxShadow: "0 8px 22px rgba(28, 55, 56, 0.35)",

                "&:hover": {
                  backgroundColor: "base.mid",
                  boxShadow: "0 10px 30px rgba(28, 55, 56, 0.45)",
                  transform: "translateY(-1px)",
                },
              }}
            >
              {language.login}
            </Button>
          </Box>
        </Paper>
      </Box>
    </Backdrop>
  );
}
