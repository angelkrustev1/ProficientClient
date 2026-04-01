import { Box, IconButton, Typography } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import * as assignmentApi from "../../../api/assignmentApi";

export default function AssignmentCard({ assignment, courseId, onDeleted }) {
  const { email } = useAuth();
  const [deleting, setDeleting] = useState(false);

  const isOwner =
    email &&
    assignment?.creator_email &&
    email.toLowerCase() === assignment.creator_email.toLowerCase();

  const deleteHandler = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const confirmed = window.confirm(
      `Are you sure you want to delete "${assignment.title}"?`
    );

    if (!confirmed) {
      return;
    }

    try {
      setDeleting(true);
      await assignmentApi.deleteAssignment(assignment.id);

      if (onDeleted) {
        await onDeleted();
      }
    } catch (error) {
      alert(error.message || "Failed to delete assignment.");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <Box
      component={Link}
      to={`/courses/${courseId}/assignments/${assignment.id}`}
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
      {isOwner && (
        <IconButton
          onClick={deleteHandler}
          disabled={deleting}
          size="small"
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            zIndex: 2,
            color: "error.main",
            backgroundColor: "background.paper",
            border: "1px solid",
            borderColor: "divider",
            "&:hover": {
              backgroundColor: "action.hover",
            },
          }}
        >
          <DeleteOutlineIcon fontSize="small" />
        </IconButton>
      )}

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

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
          minWidth: 0,
          pr: isOwner ? 5 : 0,
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
          {assignment.title}
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "0.88rem", sm: "0.95rem" },
            color: "text.secondary",
            lineHeight: 1.6,
            wordBreak: "break-word",
          }}
        >
          {assignment.description || "No description"}
        </Typography>
      </Box>
    </Box>
  );
}