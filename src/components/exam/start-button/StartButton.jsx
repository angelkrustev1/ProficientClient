import { Box, Button } from "@mui/material";
import useLanguage from "../../../hooks/useLanguage";

export default function StartButton({ onClick, disabled = false }) {
    let language = useLanguage();
  return (
    <Box sx={{ mt: 6 }}>
      <Button
        type="button"
        onClick={onClick}
        disabled={disabled}
        variant="contained"
        color="primary"
        fullWidth
        sx={{
          py: 1.1, // slimmer height
          fontSize: "0.95rem",
          fontWeight: 500, // less shouty
          letterSpacing: "0.04em",
          textTransform: "none",
          borderRadius: 2,
          boxShadow: "0px 6px 14px rgba(0, 0, 0, 0.18)",
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
