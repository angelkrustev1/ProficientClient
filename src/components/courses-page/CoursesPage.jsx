import { Box, Container, Typography } from "@mui/material";
import CoursesList from "./courses-list/CoursesList";
import NoCourses from "./no-courses/NoCourses";
import useLanguage from "../../hooks/useLanguage";

export default function CoursesPage() {
  const language = useLanguage();

  return (
    <Box
      sx={{
        py: { xs: 3, sm: 4 },
        minHeight: "100%",
        backgroundColor: "background.default",
        flexGrow: 1,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          px: { xs: 2, sm: 3 },
        }}
      >
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
            fontWeight: 600,
            color: "primary.main",
            letterSpacing: "0.03em",
            textShadow: "1px 1px 3px rgba(28, 55, 56, 0.2)",
            mb: { xs: 3, sm: 4, md: 5 },
            lineHeight: 1.2,
          }}
        >
          {language.courses}
        </Typography>

        {false ? <CoursesList /> : <NoCourses />}
      </Container>
    </Box>
  );
}