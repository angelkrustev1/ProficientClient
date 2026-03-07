import { Box, Button } from "@mui/material";
import useLanguage from "../../../hooks/useLanguage";

export default function StartButton({ onClick, disabled = false }) {
  const language = useLanguage();

  return (
    <Box
      sx={{
        mt: { xs: 4, sm: 5, md: 6 },
        width: "100%",
      }}
    >
      <Button
        type="button"
        onClick={onClick}
        disabled={disabled}
        variant="contained"
        color="primary"
        fullWidth
        sx={{
          py: { xs: 1.2, sm: 1.15, md: 1.1 },
          fontSize: { xs: "0.9rem", sm: "0.93rem", md: "0.95rem" },
          fontWeight: 500,
          letterSpacing: "0.04em",
          textTransform: "none",
          borderRadius: 2,
          boxShadow: "0px 6px 14px rgba(0, 0, 0, 0.18)",
          transition: "box-shadow 0.2s ease",

          "&:hover": {
            boxShadow: "0px 8px 18px rgba(0, 0, 0, 0.22)",
          },
        }}
      >
        {language.start}
      </Button>
    </Box>
  );
}