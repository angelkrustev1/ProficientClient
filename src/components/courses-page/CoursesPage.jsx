import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import LoginIcon from "@mui/icons-material/Login";
import CourseCard from "../course-card/CourseCard";
import CourseCreate from "../course-create/CourseCreate";
import CourseJoin from "../course-join/CourseJoin";
import NoCourses from "./no-courses/NoCourses";
import useLanguage from "../../hooks/useLanguage";
import useCourses from "../../hooks/useCourses";

export default function CoursesPage() {
  const language = useLanguage();
  const {
    courses,
    loading,
    actionLoading,
    error,
    createCourse,
    joinCourse,
    leaveCourse,
    deleteCourse,
  } = useCourses();

  const [createOpen, setCreateOpen] = useState(false);
  const [joinOpen, setJoinOpen] = useState(false);

  const leaveHandler = async (courseId) => {
    await leaveCourse(courseId);
  };

  const deleteHandler = async (courseId) => {
    await deleteCourse(courseId);
  };

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

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          sx={{ mb: 4 }}
        >
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => setCreateOpen(true)}
          >
            {language.createCourse || "Create course"}
          </Button>

          <Button
            variant="outlined"
            startIcon={<LoginIcon />}
            onClick={() => setJoinOpen(true)}
          >
            {language.joinCourse || "Join course"}
          </Button>
        </Stack>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", py: 6 }}>
            <CircularProgress />
          </Box>
        ) : courses.length > 0 ? (
          <Box
            sx={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)",
              },
              gap: { xs: 2, sm: 2.5 },
              justifyItems: {
                xs: "center",
                sm: "stretch",
              },
            }}
          >
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onLeave={leaveHandler}
                onDelete={deleteHandler}
                loading={actionLoading}
              />
            ))}
          </Box>
        ) : (
          <NoCourses />
        )}

        <CourseCreate
          open={createOpen}
          onClose={() => setCreateOpen(false)}
          onCreate={createCourse}
          loading={actionLoading}
        />

        <CourseJoin
          open={joinOpen}
          onClose={() => setJoinOpen(false)}
          onJoin={joinCourse}
          loading={actionLoading}
        />
      </Container>
    </Box>
  );
}