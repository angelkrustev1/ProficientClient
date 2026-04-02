import { useMemo, useState } from "react";
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
import SearchBar from "../search-bar/SearchBar";
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
  const [searchValue, setSearchValue] = useState("");

  const normalizedSearch = searchValue.trim().toLowerCase();

  const filteredCourses = useMemo(() => {
    if (!normalizedSearch) {
      return courses;
    }

    return courses.filter((course) => {
      const title = course.title?.toLowerCase() || "";
      const joinCode = course.join_code?.toLowerCase() || "";

      return (
        title.includes(normalizedSearch) ||
        joinCode.includes(normalizedSearch)
      );
    });
  }, [courses, normalizedSearch]);

  const leaveHandler = async (courseId) => {
    await leaveCourse(courseId);
  };

  const deleteHandler = async (courseId) => {
    await deleteCourse(courseId);
  };

  const searchChangeHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const hasCourses = courses.length > 0;
  const hasFilteredCourses = filteredCourses.length > 0;
  const isSearching = normalizedSearch.length > 0;

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
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "stretch", md: "center" },
            justifyContent: "space-between",
            gap: 2,
            mb: { xs: 3, sm: 4, md: 5 },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
              fontWeight: 600,
              color: "primary.main",
              letterSpacing: "0.03em",
              textShadow: "1px 1px 3px rgba(28, 55, 56, 0.2)",
              lineHeight: 1.2,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {language.courses}
          </Typography>

          {hasCourses && (
            <Box
              sx={{
                width: { xs: "100%", md: "auto" },
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },
              }}
            >
              <SearchBar
                value={searchValue}
                onChange={searchChangeHandler}
                placeholder={`${language.search} ${language.courses?.toLowerCase() || "courses"}...`}
                fullWidth
                maxWidth={360}
              />
            </Box>
          )}
        </Box>

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
        ) : hasCourses ? (
          hasFilteredCourses ? (
            <>
              <Box
                sx={{
                  mb: 2,
                  px: { xs: 0.5, sm: 0 },
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    textAlign: { xs: "center", sm: "left" },
                  }}
                >
                  {isSearching
                    ? `${filteredCourses.length} result${
                        filteredCourses.length === 1 ? "" : "s"
                      } found`
                    : `${courses.length} course${
                        courses.length === 1 ? "" : "s"
                      }`}
                </Typography>
              </Box>

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
                {filteredCourses.map((course) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    onLeave={leaveHandler}
                    onDelete={deleteHandler}
                    loading={actionLoading}
                  />
                ))}
              </Box>
            </>
          ) : (
            <Box
              sx={{
                py: 8,
                textAlign: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  mb: 1,
                  color: "text.primary",
                  fontWeight: 600,
                }}
              >
                No matching courses
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                }}
              >
                Try searching by course title or join code.
              </Typography>
            </Box>
          )
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