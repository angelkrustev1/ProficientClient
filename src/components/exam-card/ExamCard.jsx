import { Card, CardMedia, CardActions, Button, Box } from "@mui/material";
import { Link } from "react-router";
import useLanguage from "../../hooks/useLanguage";

export default function ExamCard() {
  const language = useLanguage();
  const image = "/Матура.png";

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: { xs: 420, sm: 340, md: 315 },
        minWidth: 0,
        height: { xs: 250, sm: 265, md: 275 },
        display: "flex",
        flexDirection: "column",
        borderRadius: 0.4,
        overflow: "hidden",
        backgroundColor: "background.paper",
        boxShadow:
          "0px 8px 18px rgba(0, 15, 8, 0.18), 0px 2px 4px rgba(0, 15, 8, 0.12)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow:
            "0px 14px 30px rgba(0, 15, 8, 0.25), 0px 4px 8px rgba(0, 15, 8, 0.18)",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          height: "78%",
          backgroundColor: "base.light",
          overflow: "hidden",
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt="Preview"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "opacity 0.22s ease, transform 0.22s ease",
            "&:hover": {
              opacity: 0.9,
              transform: "scale(1.03)",
            },
          }}
        />

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(28,55,56,0.0), rgba(28,55,56,0.12))",
            pointerEvents: "none",
          }}
        />
      </Box>

      <CardActions
        sx={{
          height: "22%",
          px: { xs: 1, sm: 1.25, md: 1.5 },
          py: { xs: 0.9, sm: 1 },
          gap: { xs: 0.75, sm: 1 },
          display: "flex",
          alignItems: "center",
          backgroundColor: "base.soft",
        }}
      >
        <Button
          component={Link}
          to={`/exams/${1}?mode=view`}
          variant="outlined"
          fullWidth
          sx={{
            minWidth: 0,
            height: { xs: 36, sm: 34 },
            borderRadius: 0.4,
            textTransform: "none",
            fontSize: { xs: "0.78rem", sm: "0.8rem", md: "0.82rem" },
            fontWeight: 500,
            letterSpacing: { xs: "0.3px", sm: "0.5px" },
            color: "primary.main",
            borderColor: "primary.main",
            backgroundColor: "background.paper",
            transition: "all 0.18s ease",
            "&:hover": {
              backgroundColor: "primary.main",
              color: "primary.contrastText",
              transform: "translateY(-1px)",
              boxShadow: "0px 4px 12px rgba(28, 55, 56, 0.25)",
            },
          }}
        >
          {language.view}
        </Button>

        <Button
          component={Link}
          to={`/exams/${1}?mode=active`}
          variant="contained"
          fullWidth
          sx={{
            minWidth: 0,
            height: { xs: 36, sm: 34 },
            borderRadius: 0.4,
            textTransform: "none",
            fontSize: { xs: "0.78rem", sm: "0.8rem", md: "0.82rem" },
            fontWeight: 600,
            letterSpacing: { xs: "0.35px", sm: "0.6px" },
            boxShadow: "0px 3px 8px rgba(0, 15, 8, 0.35)",
            backgroundColor: "primary.main",
            color: "primary.contrastText",
            transition: "all 0.18s ease",
            "&:hover": {
              boxShadow: "0px 6px 14px rgba(0, 15, 8, 0.45)",
              transform: "translateY(-1px)",
            },
            "&:active": {
              boxShadow: "0px 2px 4px rgba(0, 15, 8, 0.3)",
              transform: "translateY(0)",
            },
          }}
        >
          {language.start}
        </Button>
      </CardActions>
    </Card>
  );
}