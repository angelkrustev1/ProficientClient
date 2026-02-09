import { Box } from "@mui/material";
import CourseCard from "../../course-card/CourseCard";

export default function CoursesList() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        justifyContent: {
          xs: "center",
          sm: "flex-start",
        },
      }}
    >
      {/* Fixed amount of cards */}
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
