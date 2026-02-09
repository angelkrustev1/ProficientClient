import { Box, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import Course from "../course/Course";
import Chat from "../chat/Chat";
import useLanguage from "../../hooks/useLanguage";

export default function AssignmentPage() {
  let language = useLanguage();
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1200,
        mx: "auto",
        backgroundColor: "background.default",
        flexGrow: 1,
        px: 7,
        py: 3,
        border: "1px solid",
        borderColor: "divider",
        boxShadow: "0px 10px 24px rgba(0, 0, 0, 0.14)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          borderBottom: "1px solid",
          borderColor: "divider",
          backgroundColor: "background.paper",
        }}
      >
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          variant="fullWidth"
          sx={{
            minHeight: 48,
            "& .MuiTabs-indicator": {
              height: 2,
              backgroundColor: "primary.main",
            },
          }}
        >
          <Tab
            label={language.course}
            sx={{
              minHeight: 48,
              textTransform: "none",
              fontSize: "0.95rem",
              fontWeight: 600,
              letterSpacing: "0.25px",
              color: "text.primary",
              borderRight: "1px solid",
              borderColor: "divider",
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
              minHeight: 48,
              textTransform: "none",
              fontSize: "0.95rem",
              fontWeight: 600,
              letterSpacing: "0.25px",
              color: "text.primary",
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

      {/* Example conditional rendering */}
      {tabValue === 0 && <Course />}
      {tabValue === 1 && <Chat />}
    </Box>
  );
}
