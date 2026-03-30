import { Card, CardMedia, CardActions, Button, Box, Typography } from "@mui/material";
import { Link } from "react-router";
import useLanguage from "../../hooks/useLanguage";

const BASE_URL = "http://127.0.0.1:8000";

function getCourseImage(image) {
  if (!image) return "/Learning.png";
  if (image.startsWith("http")) return image;
  return `${BASE_URL}${image}`;
}

export default function CourseCard({ course, onLeave, onDelete, loading }) {
  const language = useLanguage();

  const actionHandler = () => {
    if (course.is_creator) {
      onDelete(course.id);
      return;
    }

    onLeave(course.id);
  };

  return (
    <Card
      sx={{
        width: { xs: "100%", sm: 260, md: 275 },
        maxWidth: 275,
        height: 250,
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
          image={getCourseImage(course.image)}
          alt={course.title}
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

        <Box
          sx={{
            position: "absolute",
            left: 10,
            right: 10,
            bottom: 10,
            color: "white",
            textShadow: "0px 1px 4px rgba(0,0,0,0.5)",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 700,
              lineHeight: 1.15,
            }}
          >
            {course.title}
          </Typography>

          <Typography
            variant="caption"
            sx={{
              display: "block",
              mt: 0.25,
            }}
          >
            {(language.joinCode || "Join code")}: {course.join_code}
          </Typography>
        </Box>
      </Box>

      <CardActions
        sx={{
          height: "22%",
          px: { xs: 1.2, sm: 1.5 },
          py: 1,
          gap: 1,
          display: "flex",
          alignItems: "center",
          backgroundColor: "base.soft",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <Button
          component={Link}
          to={`/courses/${course.id}`}
          variant="outlined"
          fullWidth
          sx={{
            height: { xs: 32, sm: 34 },
            borderRadius: 0.4,
            textTransform: "none",
            fontSize: { xs: "0.78rem", sm: "0.82rem" },
            fontWeight: 500,
            letterSpacing: "0.5px",
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
          {language.open}
        </Button>

        <Button
          variant="contained"
          fullWidth
          onClick={actionHandler}
          disabled={loading}
          sx={{
            height: { xs: 32, sm: 34 },
            borderRadius: 0.4,
            textTransform: "none",
            fontSize: { xs: "0.78rem", sm: "0.82rem" },
            fontWeight: 600,
            letterSpacing: "0.6px",
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
          {course.is_creator
            ? (language.delete || "Delete")
            : (language.leave || "Leave")}
        </Button>
      </CardActions>
    </Card>
  );
}