import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import useLanguage from "../../../hooks/useLanguage";

export default function CourseButtons({
  materialHandler,
  assignmentHandler,
}) {
  let language = useLanguage();

  const baseButtonSx = {
    minWidth: 220,          
    height: 56,            
    px: 3,
    fontSize: "0.95rem",
    fontWeight: 600,
    letterSpacing: "0.2px",
    textTransform: "none",

    borderRadius: 0.8,       
    display: "flex",
    justifyContent: "space-between",

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
        gap: 2,
        zIndex: 10,
      }}
    >
      {/* Задание */}
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

      {/* Материал */}
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
