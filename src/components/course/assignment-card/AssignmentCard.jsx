import { Box, Typography } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Link } from "react-router";

export default function AssignmentCard() {
  return (
    <Box
      component={Link}
      to="/courses/:courseId/assignments/:assingmentlId"
      sx={{
        textDecoration: "none",
        color: "inherit",

        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: 4,
        mt: 3,
        px: 4,
        py: 3,
        cursor: "pointer",
        backgroundColor: "base.soft",
        borderRadius: 1.4,

        position: "relative",
        overflow: "hidden",

        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.14)",
        transition: "all 0.25s ease",

        "&:hover": {
          transform: "translateY(-3px)",
          boxShadow: "0 18px 45px rgba(0, 0, 0, 0.22)",
          textDecoration: "none", // extra-safe
        },

        // left accent strip
        "&::before": {
          content: '""',
          position: "absolute",
          left: 0,
          top: 0,
          width: 4,
          height: "100%",
          backgroundColor: "primary.main",
        },
      }}
    >
      {/* Icon block */}
      <Box
        sx={{
          width: 64,
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 0.8,
          backgroundColor: "action.selected",
          color: "primary.main",
          flexShrink: 0,
        }}
      >
        <AssignmentIcon sx={{ fontSize: 30 }} />
      </Box>

      {/* Text content */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: 500,
            color: "text.primary",
            letterSpacing: "0.2px",
          }}
        >
          Learning Material
        </Typography>

        <Typography
          sx={{
            fontSize: "0.95rem",
            color: "text.secondary",
            lineHeight: 1.6,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
      </Box>
    </Box>
  );
}
