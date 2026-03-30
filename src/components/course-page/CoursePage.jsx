import { Alert, Box, CircularProgress, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router";
import Course from "../course/Course";
import Chat from "../chat/Chat";
import useLanguage from "../../hooks/useLanguage";
import useCourseDetails from "../../hooks/useCourseDetails";

export default function CoursePage() {
  const language = useLanguage();
  const { courseId } = useParams();
  const { course, loading, error } = useCourseDetails(courseId);
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ width: "100%", maxWidth: 1200, mx: "auto", px: 2, py: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  if (!course) {
    return (
      <Box sx={{ width: "100%", maxWidth: 1200, mx: "auto", px: 2, py: 4 }}>
        <Alert severity="warning">Course not found.</Alert>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1200,
        mx: "auto",
        backgroundColor: "background.default",
        flexGrow: 1,
        px: { xs: 1.5, sm: 3, md: 5, lg: 7 },
        py: { xs: 2, sm: 2.5, md: 3 },
        border: "1px solid",
        borderColor: "divider",
        boxShadow: "0px 10px 24px rgba(0, 0, 0, 0.14)",
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      <Box sx={{ mb: 2 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: "text.primary",
            fontSize: { xs: "1.4rem", sm: "1.8rem" },
            mb: 0.5,
          }}
        >
          {course.title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            fontWeight: 500,
          }}
        >
          {(language.joinCode || "Join code")}: {course.join_code}
        </Typography>
      </Box>

      <Box
        sx={{
          borderBottom: "1px solid",
          borderColor: "divider",
          backgroundColor: "background.paper",
          overflowX: "auto",
        }}
      >
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          variant="fullWidth"
          sx={{
            minHeight: { xs: 46, sm: 48 },
            "& .MuiTabs-indicator": {
              height: 2,
              backgroundColor: "primary.main",
            },
          }}
        >
          <Tab
            label={language.course}
            sx={{
              minHeight: { xs: 46, sm: 48 },
              minWidth: 0,
              textTransform: "none",
              fontSize: { xs: "0.9rem", sm: "0.95rem" },
              fontWeight: 600,
              letterSpacing: "0.25px",
              color: "text.primary",
              borderRight: "1px solid",
              borderColor: "divider",
              px: { xs: 1, sm: 2 },
              "&.Mui-selected": {
                color: "primary.main",
              },
              "&:hover": {
                backgroundColor: "action.hover",
              },
            }}
          />

          <Tab
            label={language.chat}
            sx={{
              minHeight: { xs: 46, sm: 48 },
              minWidth: 0,
              textTransform: "none",
              fontSize: { xs: "0.9rem", sm: "0.95rem" },
              fontWeight: 600,
              letterSpacing: "0.25px",
              color: "text.primary",
              px: { xs: 1, sm: 2 },
              "&.Mui-selected": {
                color: "primary.main",
              },
              "&:hover": {
                backgroundColor: "action.hover",
              },
            }}
          />
        </Tabs>
      </Box>

      {tabValue === 0 && <Course course={course} />}
      {tabValue === 1 && <Chat />}
    </Box>
  );
}