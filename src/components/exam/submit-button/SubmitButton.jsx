import { Box, Button } from "@mui/material";
import { Link } from "react-router";
import useLanguage from "../../../hooks/useLanguage";

export default function SubmitButton() {
  let language = useLanguage();
  return (
    <Box sx={{ mt: 6 }}>
      <Button
        component={Link}
        to='/exams/:examId/result'
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
        {language.send}
      </Button>
    </Box>
  );
}
