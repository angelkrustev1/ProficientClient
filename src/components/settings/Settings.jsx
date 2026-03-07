import {
  Box,
  Paper,
  Typography,
  Avatar,
  Button,
  IconButton,
  Backdrop,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import CloseIcon from "@mui/icons-material/Close";
import ThemeOptions from "./theme-options/ThemeOptions";
import LanguageOptions from "./language-options/LanguageOptions";
import useLanguage from "../../hooks/useLanguage";
import { useContext } from "react";
import { CustomThemeContext } from "../../contexts/CustomThemeContext";
import { LanguageContext } from "../../contexts/LanguageContext";

export default function Settings({ open, onClose }) {
  const language = useLanguage();
  const { resetDefaultTheme } = useContext(CustomThemeContext);
  const { languageResetDefaultHandler } = useContext(LanguageContext);

  const resetHandler = () => {
    resetDefaultTheme();
    languageResetDefaultHandler();
  };

  return (
    <Backdrop
      open={open}
      onClick={onClose}
      sx={{
        zIndex: "modal",
        bgcolor: "rgba(0, 0, 0, 0.6)",
        px: 2,
        py: { xs: 2, sm: 3 },
      }}
    >
      <Paper
        elevation={6}
        onClick={(e) => e.stopPropagation()}
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: 420,
          maxHeight: "90vh",
          overflowY: "auto",
          px: { xs: 2.5, sm: 4 },
          py: { xs: 3, sm: 4 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 2.5, sm: 3 },
          bgcolor: "base.light",
          borderRadius: 1,
          boxSizing: "border-box",
        }}
      >
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: "base.mid",
          }}
        >
          <CloseIcon />
        </IconButton>

        <Avatar
          sx={{
            bgcolor: "base.mid",
            width: { xs: 44, sm: 48 },
            height: { xs: 44, sm: 48 },
          }}
        >
          <SettingsIcon sx={{ color: "base.soft" }} />
        </Avatar>

        <Typography
          variant="h5"
          component="h1"
          fontWeight={600}
          color="base.hard"
          textAlign="center"
          sx={{
            fontSize: { xs: "1.25rem", sm: "1.5rem" },
            lineHeight: 1.2,
          }}
        >
          {language.settings}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 2.5, sm: 3 },
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "stretch", sm: "center" },
              gap: { xs: 2, sm: 2 },
              width: "100%",
            }}
          >
            <Box sx={{ width: { xs: "100%", sm: "auto" } }}>
              <ThemeOptions />
            </Box>

            <Box sx={{ width: { xs: "100%", sm: "auto" } }}>
              <LanguageOptions />
            </Box>
          </Box>

          <Button
            variant="contained"
            onClick={(e) => {
              e.stopPropagation();
              resetHandler();
            }}
            fullWidth
            sx={{
              minHeight: 44,
              bgcolor: "base.soft",
              color: "base.light",
              fontWeight: 600,
              "&:hover": {
                bgcolor: "base.hard",
              },
            }}
          >
            {language.reset}
          </Button>
        </Box>
      </Paper>
    </Backdrop>
  );
}