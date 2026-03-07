import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import useLanguage from "../../../hooks/useLanguage";

export default function CourseButtons({
  materialHandler,
  assignmentHandler,
}) {
  const language = useLanguage();

  const baseButtonSx = {
    width: { xs: "100%", sm: "auto" },
    minWidth: { sm: 200, md: 220 },
    height: { xs: 52, sm: 56 },

    px: { xs: 2.5, sm: 3 },
    fontSize: { xs: "0.9rem", sm: "0.95rem" },
    fontWeight: 600,
    letterSpacing: "0.2px",
    textTransform: "none",

    borderRadius: 0.8,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    boxShadow: "0 10px 26px rgba(0, 0, 0, 0.14)",
    transition: "all 160ms ease",

    "& .MuiButton-endIcon": {
      marginLeft: 12,
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: 1.5, sm: 2 },
        width: "100%",
        zIndex: 10,
      }}
    >
      {/* Assignment */}
      <Button
        variant="contained"
        onClick={assignmentHandler}
        endIcon={<AddIcon />}
        sx={{
          ...baseButtonSx,
          backgroundColor: "primary.main",
          color: "primary.contrastText",

          "&:hover": {
            backgroundColor: "base.mid",
            boxShadow: "0 14px 34px rgba(28, 55, 56, 0.32)",
            transform: "translateY(-1px)",
          },
        }}
      >
        {language.assignment}
      </Button>

      {/* Material */}
      <Button
        variant="contained"
        endIcon={<AddIcon />}
        onClick={materialHandler}
        sx={{
          ...baseButtonSx,
          backgroundColor: "secondary.main",
          color: "secondary.contrastText",

          "&:hover": {
            backgroundColor: "base.soft",
            boxShadow: "0 14px 34px rgba(139, 170, 173, 0.42)",
            transform: "translateY(-1px)",
          },
        }}
      >
        {language.material}
      </Button>
    </Box>
  );
}