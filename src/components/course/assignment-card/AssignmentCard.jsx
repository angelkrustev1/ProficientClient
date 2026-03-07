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
        gap: { xs: 2, sm: 3, md: 4 },
        mt: { xs: 2, sm: 2.5, md: 3 },
        px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 2, sm: 2.5, md: 3 },

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
          textDecoration: "none",
        },

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
          width: { xs: 48, sm: 56, md: 64 },
          height: { xs: 48, sm: 56, md: 64 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 0.8,
          backgroundColor: "action.selected",
          color: "primary.main",
          flexShrink: 0,
        }}
      >
        <AssignmentIcon
          sx={{
            fontSize: { xs: 22, sm: 26, md: 30 },
          }}
        />
      </Box>

      {/* Text content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
          minWidth: 0,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "0.95rem", sm: "1rem" },
            fontWeight: 500,
            color: "text.primary",
            letterSpacing: "0.2px",
            lineHeight: 1.3,
          }}
        >
          Learning Material
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "0.88rem", sm: "0.95rem" },
            color: "text.secondary",
            lineHeight: 1.6,
            wordBreak: "break-word",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
      </Box>
    </Box>
  );
}