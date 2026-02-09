import { Box, Container, Typography } from "@mui/material";
import CoursesList from "./courses-list/CoursesList";
import NoCourses from "./no-courses/NoCourses";
import useLanguage from "../../hooks/useLanguage";

export default function CoursesPage() {
  let language = useLanguage()

  return (
    <Box
      sx={{
        py: 4,
        minHeight: "100%",
        backgroundColor: "background.default",
        flexGrow: 1,
      }}
    >
      <Container maxWidth="lg">
        {/* HEADER */}
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontSize: "2rem",
            fontWeight: 600,
            color: "primary.main",
            letterSpacing: "0.03em",
            textShadow: "1px 1px 3px rgba(28, 55, 56, 0.2)",
            mb: 5,
          }}
        >
          {language.courses}
        </Typography>

        {false ? (
          <CoursesList />
        ) : (
         <NoCourses />
        )}
      </Container>
    </Box>
  );
}
