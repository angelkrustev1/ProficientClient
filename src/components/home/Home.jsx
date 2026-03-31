import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useLanguage from "../../hooks/useLanguage";
import useCourses from "../../hooks/useCourses";
import JoinCourseForm from "../join-course-form/JoinCourseForm";

export default function Home() {
  const theme = useTheme();
  const language = useLanguage();
  const { joinCourse, actionLoading } = useCourses();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: { xs: "1.5rem", md: "2rem" },
        flex: 1,
        width: "100%",
        height: "100%",
        px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 3, md: 4 },
        boxSizing: "border-box",
      }}
    >
      <JoinCourseForm onJoin={joinCourse} loading={actionLoading} />

      <Typography
        variant="h1"
        sx={{
          fontSize: {
            xs: "1.9rem",
            sm: "2.6rem",
            md: "3.5rem",
            lg: "4.5rem",
          },
          fontWeight: 700,
          color: theme.palette.text.primary,
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          lineHeight: 1.15,
          maxWidth: "1000px",
          width: "100%",
          wordBreak: "break-word",
          overflowWrap: "break-word",
          whiteSpace: "normal",
        }}
      >
        {language.homeTitlePartOne}
        <br />
        {language.homeTitlePartTwo}
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontSize: {
            xs: "0.95rem",
            sm: "1.05rem",
            md: "1.2rem",
            lg: "1.35rem",
          },
          fontWeight: 400,
          color: theme.palette.primary.main,
          textAlign: "center",
          textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)",
          lineHeight: 1.6,
          maxWidth: "850px",
          width: "100%",
          mb: { xs: 2, md: 4 },
          wordBreak: "break-word",
          overflowWrap: "break-word",
          whiteSpace: "normal",
        }}
      >
        {language.homeSubTitlePartOne}
        <br />
        {language.homeSubTitlePartTwo}
      </Typography>
    </Box>
  );
}