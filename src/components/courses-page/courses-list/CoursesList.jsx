import { Box } from "@mui/material";
import CourseCard from "../../course-card/CourseCard";

export default function CoursesList() {
  return (
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
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />

      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />

      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
    </Box>
  );
}