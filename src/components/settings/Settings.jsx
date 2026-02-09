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
  let language = useLanguage();
  let { resetDefaultTheme } = useContext(CustomThemeContext);
  let { languageResetDefaultHandler } = useContext(LanguageContext);

  const resetHander = () => {
    resetDefaultTheme();
    languageResetDefaultHandler();
  };

  return (
    <Backdrop
      open={open}
      onClick={onClose} // closes only when clicking the backdrop (outside the card)
      sx={{
        zIndex: "modal",
        bgcolor: "rgba(0, 0, 0, 0.6)",
      }}
    >
      <Paper
        elevation={6}
        onClick={(e) => e.stopPropagation()} // prevents clicks inside from closing
        sx={{
          position: "relative",
          p: 4,
          maxWidth: 420,
          width: "90%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
          bgcolor: "#base.light",
        }}
      >
        <IconButton
          onClick={(e) => {
            e.stopPropagation(); // (not strictly necessary now, but safe)
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

        <Avatar sx={{ bgcolor: "base.mid" }}>
          <SettingsIcon sx={{ color: "base.soft" }} />
        </Avatar>

        <Typography
          variant="h5"
          component="h1"
          fontWeight={600}
          color="base.hard"
        >
          {language.settings}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <ThemeOptions />
            <LanguageOptions />
          </Box>

          <Button
            variant="contained"
            onClick={(e) => {
              e.stopPropagation();
              resetHander();
            }}
            sx={{
              bgcolor: "base.soft",
              color: "base.light",
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
