import { Alert, Box, Button, Chip, CircularProgress, Link as MuiLink, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import DescriptionIcon from "@mui/icons-material/Description";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmailIcon from "@mui/icons-material/Email";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import { Link, useParams } from "react-router";
import useAssignmentDetails from "../../../hooks/useAssignmentDetails";
import useAssignmentSubmissions from "../../../hooks/useAssignmentSubmissions";
import useLanguage from "../../../hooks/useLanguage";

function getFileIcon(filename = "") {
  const lower = filename.toLowerCase();

  if (
    lower.endsWith(".png") ||
    lower.endsWith(".jpg") ||
    lower.endsWith(".jpeg") ||
    lower.endsWith(".webp") ||
    lower.endsWith(".gif")
  ) {
    return (
      <InsertDriveFileIcon
        sx={{
          color: "primary.main",
          fontSize: { xs: 22, sm: 24 },
          flexShrink: 0,
        }}
      />
    );
  }

  if (lower.endsWith(".pdf")) {
    return (
      <PictureAsPdfIcon
        sx={{
          color: "primary.main",
          fontSize: { xs: 22, sm: 24 },
          flexShrink: 0,
        }}
      />
    );
  }

  if (lower.endsWith(".doc") || lower.endsWith(".docx") || lower.endsWith(".txt")) {
    return (
      <DescriptionIcon
        sx={{
          color: "primary.main",
          fontSize: { xs: 22, sm: 24 },
          flexShrink: 0,
        }}
      />
    );
  }

  return (
    <InsertDriveFileIcon
      sx={{
        color: "primary.main",
        fontSize: { xs: 22, sm: 24 },
        flexShrink: 0,
      }}
    />
  );
}

function formatSubmittedAt(dateString) {
  if (!dateString) {
    return "—";
  }

  const date = new Date(dateString);

  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

export default function AssignmentSubmissions() {
  const { courseId, assignmentId } = useParams();
  const language = useLanguage();

  const {
    assignment,
    loading: assignmentLoading,
    error: assignmentError,
  } = useAssignmentDetails(assignmentId);

  const {
    submissions,
    loading: submissionsLoading,
    error: submissionsError,
  } = useAssignmentSubmissions(assignmentId);

  const totalFiles = submissions.reduce(
    (acc, submission) => acc + (submission.files?.length || 0),
    0
  );

  const latestSubmission = submissions.length > 0 ? submissions[0] : null;

  if (assignmentLoading || submissionsLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (assignmentError || submissionsError) {
    return (
      <Box sx={{ width: "100%", maxWidth: 1200, mx: "auto", px: 2, py: 4 }}>
        <Alert severity="error">{assignmentError || submissionsError}</Alert>
      </Box>
    );
  }

  if (!assignment) {
    return (
      <Box sx={{ width: "100%", maxWidth: 1200, mx: "auto", px: 2, py: 4 }}>
        <Alert severity="warning">{language.assignmentNotFount}</Alert>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1200,
        mx: "auto",
        backgroundColor: "background.default",
        flexGrow: 1,
        px: { xs: 2, sm: 3, md: 5, lg: 7 },
        py: { xs: 2, sm: 2.5, md: 3 },
        border: "1px solid",
        borderColor: "divider",
        boxShadow: "0px 10px 24px rgba(0, 0, 0, 0.14)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 2,
          mb: { xs: 2.5, md: 3 },
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ minWidth: 0, flex: 1 }}>
          <Typography
            sx={{
              fontSize: { xs: "1.12rem", sm: "1.22rem", md: "1.35rem" },
              fontWeight: 750,
              letterSpacing: "0.2px",
              color: "text.primary",
              lineHeight: 1.3,
              mb: 1,
            }}
          >
            {language.assignmentSubmissions}
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "0.94rem", sm: "0.98rem" },
              fontWeight: 700,
              color: "primary.main",
              mb: 0.75,
            }}
          >
            {assignment.title}
          </Typography>

          <Typography
            sx={{
              maxWidth: 900,
              color: "text.secondary",
              fontSize: { xs: "0.92rem", sm: "0.96rem", md: "0.98rem" },
              lineHeight: { xs: 1.7, md: 1.8 },
            }}
          >
            {assignment.description || "No description"}
          </Typography>
        </Box>

        <Button
          component={Link}
          to={`/courses/${courseId}/assignments/${assignmentId}`}
          startIcon={<ArrowBackIcon />}
          sx={{
            textTransform: "none",
            fontWeight: 600,
            flexShrink: 0,
          }}
        >
          {language.backToAssignment}
        </Button>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, minmax(0, 1fr))",
            lg: "repeat(3, minmax(0, 1fr))",
          },
          gap: 2,
          mb: { xs: 3, md: 4 },
        }}
      >
        <Box
          sx={{
            p: { xs: 1.75, sm: 2 },
            borderRadius: 1.5,
            border: "1px solid",
            borderColor: "divider",
            backgroundColor: "background.paper",
            boxShadow: "0 6px 16px rgba(0, 15, 8, 0.08)",
          }}
        >
          <Typography
            sx={{
              fontSize: "0.82rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              color: "text.secondary",
              mb: 0.5,
            }}
          >
            {language.totalSubmissions}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1.25rem", sm: "1.45rem" },
              fontWeight: 800,
              color: "text.primary",
            }}
          >
            {submissions.length}
          </Typography>
        </Box>

        <Box
          sx={{
            p: { xs: 1.75, sm: 2 },
            borderRadius: 1.5,
            border: "1px solid",
            borderColor: "divider",
            backgroundColor: "background.paper",
            boxShadow: "0 6px 16px rgba(0, 15, 8, 0.08)",
          }}
        >
          <Typography
            sx={{
              fontSize: "0.82rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              color: "text.secondary",
              mb: 0.5,
            }}
          >
            {language.submittedFiles}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1.25rem", sm: "1.45rem" },
              fontWeight: 800,
              color: "text.primary",
            }}
          >
            {totalFiles}
          </Typography>
        </Box>

        <Box
          sx={{
            p: { xs: 1.75, sm: 2 },
            borderRadius: 1.5,
            border: "1px solid",
            borderColor: "divider",
            backgroundColor: "background.paper",
            boxShadow: "0 6px 16px rgba(0, 15, 8, 0.08)",
          }}
        >
          <Typography
            sx={{
              fontSize: "0.82rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              color: "text.secondary",
              mb: 0.5,
            }}
          >
            {language.latestSubmission}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.98rem", sm: "1.05rem" },
              fontWeight: 700,
              color: "text.primary",
            }}
          >
            {latestSubmission ? formatSubmittedAt(latestSubmission.submitted_at) : "—"}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2.2 }}>
        {submissions.length > 0 ? (
          submissions.map((submission) => (
            <Box
              key={submission.id}
              sx={{
                border: "1px solid",
                borderColor: "divider",
                backgroundColor: "background.paper",
                boxShadow: "0 8px 20px rgba(0, 15, 8, 0.08)",
                borderRadius: 1.5,
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  px: { xs: 1.5, sm: 2, md: 2.5 },
                  py: { xs: 1.5, sm: 1.75, md: 2 },
                  borderBottom: "1px solid",
                  borderColor: "divider",
                  backgroundColor: "background.default",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: 1.5,
                  flexWrap: "wrap",
                }}
              >
                <Box sx={{ minWidth: 0 }}>
                  <Typography
                    sx={{
                      fontSize: { xs: "0.98rem", sm: "1.03rem" },
                      fontWeight: 750,
                      color: "text.primary",
                      lineHeight: 1.35,
                      mb: 0.6,
                      wordBreak: "break-word",
                    }}
                  >
                    {submission.user}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.75,
                      color: "text.secondary",
                      mb: 0.5,
                    }}
                  >
                    <EmailIcon sx={{ fontSize: 16 }} />
                    <Typography
                      sx={{
                        fontSize: { xs: "0.85rem", sm: "0.9rem" },
                        color: "text.secondary",
                        wordBreak: "break-word",
                      }}
                    >
                      {submission.user_email}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.75,
                      color: "text.secondary",
                    }}
                  >
                    <AccessTimeIcon sx={{ fontSize: 16 }} />
                    <Typography
                      sx={{
                        fontSize: { xs: "0.84rem", sm: "0.89rem" },
                        color: "text.secondary",
                      }}
                    >
                      {language.submittedOn} {formatSubmittedAt(submission.submitted_at)}
                    </Typography>
                  </Box>
                </Box>

                <Chip
                  icon={<AssignmentTurnedInIcon />}
                  label={submission.is_submitted ? "Submitted" : "Not submitted"}
                  sx={{
                    height: 34,
                    borderRadius: 999,
                    fontWeight: 700,
                    backgroundColor: "rgba(28, 55, 56, 0.10)",
                    color: "primary.main",
                    "& .MuiChip-icon": {
                      color: "primary.main",
                    },
                  }}
                />
              </Box>

              <Box sx={{ px: { xs: 1.5, sm: 2, md: 2.5 }, py: { xs: 1.5, sm: 2 } }}>
                <Typography
                  sx={{
                    fontSize: { xs: "0.9rem", md: "0.95rem" },
                    fontWeight: 700,
                    letterSpacing: "0.15px",
                    color: "text.primary",
                    mb: 1.5,
                  }}
                >
                  {language.submittedFiles}
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  {submission.files?.length > 0 ? (
                    submission.files.map((file) => (
                      <MuiLink
                        key={file.id}
                        href={file.file_url}
                        target="_blank"
                        rel="noreferrer"
                        underline="none"
                        sx={{ color: "inherit" }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: { xs: 1.25, sm: 1.5 },
                            p: { xs: 1.25, sm: 1.5 },
                            borderRadius: 1.2,
                            border: "1px solid",
                            borderColor: "divider",
                            backgroundColor: "background.paper",
                            boxShadow: "0 6px 16px rgba(0, 15, 8, 0.08)",
                            minWidth: 0,
                            transition: "all 0.18s ease",
                            "&:hover": {
                              backgroundColor: "base.light",
                              borderColor: "primary.main",
                            },
                          }}
                        >
                          {getFileIcon(file.filename)}

                          <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                            <Typography
                              sx={{
                                fontSize: { xs: "0.88rem", sm: "0.92rem" },
                                fontWeight: 600,
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                color: "text.primary",
                              }}
                            >
                              {file.filename}
                            </Typography>

                            <Typography
                              sx={{
                                mt: 0.25,
                                fontSize: { xs: "0.76rem", sm: "0.8rem" },
                                color: "text.secondary",
                              }}
                            >
                              {language.uploaded} {formatSubmittedAt(file.uploaded_at)}
                            </Typography>
                          </Box>
                        </Box>
                      </MuiLink>
                    ))
                  ) : (
                    <Typography sx={{ color: "text.secondary", fontSize: "0.92rem" }}>
                      {language.noFilesAttached}
                    </Typography>
                  )}
                </Box>
              </Box>
            </Box>
          ))
        ) : (
          <Box
            sx={{
              border: "1px solid",
              borderColor: "divider",
              backgroundColor: "background.paper",
              boxShadow: "0 8px 20px rgba(0, 15, 8, 0.08)",
              borderRadius: 1.5,
              p: 3,
            }}
          >
            <Typography sx={{ color: "text.secondary" }}>
              {language.noSubmissionsYet}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}