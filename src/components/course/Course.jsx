import { Alert, Box, CircularProgress, Typography } from "@mui/material";
import CourseMenu from "./course-menu/CourseMenu";
import AssignmentCard from "./assignment-card/AssignmentCard";
import CourseButtons from "./course-buttons/CourseButtons";
import MaterialCreate from "./material-create/MaterialCreate";
import AssignmentCreate from "./assignment-create/AssignmentCreate";
import { useMemo, useState } from "react";
import MaterialCard from "./material-card/MaterialCard";
import NoMaterials from "./no-materials/NoMaterials";
import useLanguage from "../../hooks/useLanguage";
import useCourseMaterials from "../../hooks/useCourseMaterials";
import useCourseAssignments from "../../hooks/useCourseAssignments";

export default function Course({ course }) {
  const language = useLanguage();

  const [materialOpen, materialSetOpen] = useState(false);
  const [assignmentOpen, assignmentSetOpen] = useState(false);
  const [filter, setFilter] = useState("all");

  const {
    materials,
    loading: materialsLoading,
    error: materialsError,
    refetchMaterials,
  } = useCourseMaterials(course?.id);

  const {
    assignments,
    loading: assignmentsLoading,
    error: assignmentsError,
    refetchAssignments,
  } = useCourseAssignments(course?.id);

  const materialOpenHandler = () => materialSetOpen(true);
  const materialCloseHandler = () => materialSetOpen(false);
  const assignmentOpenHandler = () => assignmentSetOpen(true);
  const assignmentCloseHandler = () => assignmentSetOpen(false);

  const visibleAssignments = useMemo(() => {
    if (filter === "materials") {
      return [];
    }

    return assignments;
  }, [assignments, filter]);

  const visibleMaterials = useMemo(() => {
    if (filter === "assignments") {
      return [];
    }

    return materials;
  }, [materials, filter]);

  const hasVisibleContent = useMemo(() => {
    return visibleAssignments.length > 0 || visibleMaterials.length > 0;
  }, [visibleAssignments, visibleMaterials]);

  return (
    <Box
      sx={{
        width: "100%",
        minWidth: 0,
      }}
    >
      <Box
        sx={{
          mt: { xs: 2, sm: 2.5, md: 3 },
          mb: { xs: 2.5, sm: 3, md: 4 },
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            lineHeight: 1.6,
          }}
        >
          {course?.description || (language.noDescription || "No description")}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "stretch", md: "center" },
          gap: { xs: 1.5, sm: 2, md: 3 },
          mt: { xs: 0.5, sm: 1 },
          mb: { xs: 3, sm: 4, md: 6, lg: 8 },
        }}
      >
        <CourseButtons
          materialHandler={materialOpenHandler}
          assignmentHandler={assignmentOpenHandler}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "flex-start", md: "flex-end" },
            width: { xs: "100%", md: "auto" },
          }}
        >
          <CourseMenu filter={filter} onFilterChange={setFilter} />
        </Box>
      </Box>

      <MaterialCreate
        open={materialOpen}
        onClose={materialCloseHandler}
        courseId={course?.id}
        onCreated={refetchMaterials}
      />

      <AssignmentCreate
        open={assignmentOpen}
        onClose={assignmentCloseHandler}
        courseId={course?.id}
        onCreated={refetchAssignments}
      />

      {(materialsError || assignmentsError) && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {materialsError || assignmentsError}
        </Alert>
      )}

      {materialsLoading || assignmentsLoading ? (
        <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box
          sx={{
            mt: { xs: 2, sm: 3, md: 4 },
            minWidth: 0,
          }}
        >
          {hasVisibleContent ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {visibleAssignments.map((assignment) => (
                <AssignmentCard
                  key={assignment.id}
                  assignment={assignment}
                  courseId={course.id}
                  onDeleted={refetchAssignments}
                />
              ))}

              {visibleMaterials.map((material) => (
                <MaterialCard
                  key={material.id}
                  material={material}
                  courseId={course.id}
                  onDeleted={refetchMaterials}
                />
              ))}
            </Box>
          ) : (
            <NoMaterials />
          )}
        </Box>
      )}
    </Box>
  );
}