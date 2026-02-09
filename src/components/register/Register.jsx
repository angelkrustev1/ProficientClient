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
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import CloseIcon from "@mui/icons-material/Close";
import useLanguage from "../../hooks/useLanguage";

export default function Register({ open, onClose }) {
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
        }}
      >
        <Paper
          elevation={12}
          sx={{
            position: "relative",
            p: 4,                 // SAME
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,               // SAME
            bgcolor: "background.paper",
            color: "text.primary",
            borderRadius: 1.6,    // SAME
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
            <CloseIcon />
          </IconButton>

          {/* ICON */}
          <Avatar
            sx={{
              bgcolor: "action.selected",
              color: "primary.main",
            }}
          >
            <PersonAddAltIcon />
          </Avatar>

          {/* TITLE */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              letterSpacing: "0.3px",
            }}
          >
            {language.register}
          </Typography>

          {/* FORM */}
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
              required
            />

            <TextField
              label={language.password}
              type="password"
              fullWidth
              required
            />

            <TextField
              label={language.repeatPassword}
              type="password"
              fullWidth
              required
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 1,
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              {language.register}
            </Button>
          </Box>
        </Paper>
      </Box>
    </Backdrop>
  );
}
