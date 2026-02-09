import { Box, CssBaseline } from "@mui/material";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import CoursesPage from "./components/courses-page/CoursesPage";
import { Route, Routes } from "react-router";
import MaterialPage from "./components/course/material-page/MaterialPage";
import AssignmentPage from "./components/assignment-page/AssignmentPage";
import CoursePage from "./components/course-page/CoursePage";
import Result from "./components/result/Result";
import Exam from "./components/exam/Exam";
import FilterProvider from "./providers/FilterProvider";

function App() {
  return (
    <>
      <CssBaseline />
      <FilterProvider>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            minHeight: "100vh",
            bgcolor: "background.default",
          }}
        >
          <Navigation />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/exams/:examId" element={<Exam />} />
            <Route path="/exams/:examId/result" element={<Result />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:courseId" element={<CoursePage />} />
            <Route
              path="/courses/:courseId/materials/:materialId"
              element={<MaterialPage />}
            />
            <Route
              path="/courses/:courseId/assignments/:assignmentId"
              element={<AssignmentPage />}
            />
          </Routes>
          <Footer />
        </Box>
      </FilterProvider>
    </>
  );
}

export default App;
