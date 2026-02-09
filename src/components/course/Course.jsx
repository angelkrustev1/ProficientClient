import { Box } from "@mui/system";
import CourseMenu from "./course-menu/CourseMenu";
import AssignmentCard from "./assignment-card/AssignmentCard";
import CourseButtons from "./course-buttons/CourseButtons";
import MaterialCreate from "./material-create/MaterialCreate";
import AssignmentCreate from "./assignment-create/AssignmentCreate";
import { useState } from "react";
import MaterialCard from "./material-card/MaterialCard";
import NoMaterials from "./no-materials/NoMaterials";

export default function Course() {
  const [materialOpen, materialSetOpen] = useState(false);
  const [assignmentOpen, assignmentSetOpen] = useState(false);

  const materialOpenHandler = () => materialSetOpen(true);
  const materialCloseHandler = () => materialSetOpen(false);
  const assignmentOpenHandler = () => assignmentSetOpen(true);
  const assignmentCloseHandler = () => assignmentSetOpen(false);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 1,
          mb: 12,
        }}
      >
        <CourseButtons
          materialHandler={materialOpenHandler}
          assignmentHandler={assignmentOpenHandler}
        />
        <CourseMenu />
      </Box>

      <Box sx={{ mt: 20 }}>
        <MaterialCreate open={materialOpen} onClose={materialCloseHandler} />
        <AssignmentCreate
          open={assignmentOpen}
          onClose={assignmentCloseHandler}
        />
        {false ? (
          <Box>
            <AssignmentCard />
            <MaterialCard />
          </Box>
        ) : (
          <NoMaterials />
        )}
      </Box>
    </Box>
  );
}
