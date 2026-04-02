import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import DescriptionIcon from "@mui/icons-material/Description";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useRef, useState } from "react";
import { Link, useParams } from "react-router";
import useLanguage from "../../hooks/useLanguage";
import useAssignmentDetails from "../../hooks/useAssignmentDetails";
import useMyAssignmentSubmission from "../../hooks/useMyAssignmentSubmission";
import * as assignmentApi from "../../api/assignmentApi";

function getFileIcon(filename = "") {
  const lower = filename.toLowerCase();

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

  if (
    lower.endsWith(".doc") ||
    lower.endsWith(".docx") ||
    lower.endsWith(".txt")
  ) {
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
    return "";
  }

  const date = new Date(dateString);

  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

export default function AssignmentPage() {
  const language = useLanguage();
  const { assignmentId, courseId } = useParams();
  const { assignment, loading, error } = useAssignmentDetails(assignmentId);
  const {
    hasSubmission,
    submission,
    loading: submissionLoading,
    error: submissionError,
    refetchMySubmission,
  } = useMyAssignmentSubmission(assignmentId);

  const fileInputRef = useRef(null);
  const [submissionFiles, setSubmissionFiles] = useState([]);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const fileChangeHandler = (event) => {
    const files = Array.from(event.target.files || []);
    setSubmissionFiles(files);
  };

  const submitHandler = async () => {
    try {
      setSubmitting(true);
      setSubmitError("");
      setSubmitSuccess("");

      await assignmentApi.submitAssignment(assignmentId, submissionFiles);
      await refetchMySubmission();

      setSubmitSuccess("Assignment submitted successfully.");
      setSubmissionFiles([]);

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (err) {
      setSubmitError(err.message || "Failed to submit assignment.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading || submissionLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ width: "100%", maxWidth: 1200, mx: "auto", px: 2, py: 4 }}>
        <Alert severity="error">{error}</Alert>
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
          to={`/courses/${courseId}`}
          startIcon={<ArrowBackIcon />}
          sx={{
            textTransform: "none",
            fontWeight: 600,
            flexShrink: 0,

            color: "text.primary",
            backgroundColor: "transparent",

            "&:hover": {
              backgroundColor: "action.hover",
            },

            "&:active": {
              backgroundColor: "action.selected",
            },
          }}
        >
          {language.back || "Back to course"}
        </Button>
      </Box>

      <Box sx={{ mb: { xs: 4, sm: 5, md: 7 } }}>
        <Typography
          sx={{
            fontSize: { xs: "0.9rem", md: "0.95rem" },
            fontWeight: 700,
            letterSpacing: "0.15px",
            color: "text.primary",
            mb: 1.5,
          }}
        >
          {language.files}
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {assignment.files?.length > 0 ? (
            assignment.files.map((file) => (
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
                      }}
                    >
                      {file.filename}
                    </Typography>
                  </Box>
                </Box>
              </MuiLink>
            ))
          ) : (
            <Typography sx={{ color: "text.secondary" }}>
              {language.noFilesAttached}
            </Typography>
          )}
        </Box>
      </Box>

      {submissionError && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {submissionError}
        </Alert>
      )}

      {submitError && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {submitError}
        </Alert>
      )}

      {submitSuccess && (
        <Alert severity="success" sx={{ mb: 2 }}>
          {submitSuccess}
        </Alert>
      )}

      {submissionFiles.length > 0 && (
        <Box sx={{ mb: 2 }}>
          {submissionFiles.map((file, index) => (
            <Typography
              key={`${file.name}-${index}`}
              variant="body2"
              sx={{ color: "text.secondary" }}
            >
              {file.name}
            </Typography>
          ))}
        </Box>
      )}

      {hasSubmission && submission && (
        <Box
          sx={{
            mb: 2,
            pt: { xs: 1.5, sm: 2 },
            borderTop: "1px solid",
            borderColor: "divider",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "0.9rem", md: "0.95rem" },
              fontWeight: 700,
              letterSpacing: "0.15px",
              color: "success.main",
              mb: 1,
            }}
          >
            {language.assignmentSubmitted}
          </Typography>

          {submission.submitted_at && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.75,
                color: "text.secondary",
                mb: 1.5,
              }}
            >
              <AccessTimeIcon sx={{ fontSize: 16 }} />
              <Typography
                sx={{
                  fontSize: { xs: "0.84rem", sm: "0.89rem" },
                  color: "text.secondary",
                }}
              >
                {language.submittedOn}{" "}
                {formatSubmittedAt(submission.submitted_at)}
              </Typography>
            </Box>
          )}

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
                        }}
                      >
                        {file.filename}
                      </Typography>
                    </Box>
                  </Box>
                </MuiLink>
              ))
            ) : (
              <Typography sx={{ color: "text.secondary" }}>
                {language.NoSubmittedFiles}
              </Typography>
            )}
          </Box>
        </Box>
      )}

      <input
        ref={fileInputRef}
        type="file"
        multiple
        hidden
        onChange={fileChangeHandler}
      />

      <Box
        sx={{
          position: "sticky",
          bottom: 0,
          left: 0,
          right: 0,
          mt: 2,
          pt: { xs: 1.5, sm: 2 },
          pb: { xs: 1.5, sm: 2 },
          backgroundColor: "background.default",
          borderTop: "1px solid",
          borderColor: "divider",
          display: "flex",
          gap: { xs: 1.25, sm: 2 },
          flexWrap: "wrap",
          zIndex: 2,
        }}
      >
        <Button
          variant="outlined"
          startIcon={<AttachFileIcon />}
          onClick={() => fileInputRef.current?.click()}
          sx={{
            flex: { xs: "1 1 100%", sm: "1 1 280px" },
            justifyContent: "flex-start",
            textTransform: "none",
            fontWeight: 600,
            borderRadius: 1.2,
            borderColor: "divider",
            color: "text.primary",
            backgroundColor: "background.paper",
            py: 1.35,
            px: 2,
            minHeight: 48,
            "&:hover": {
              backgroundColor: "base.light",
              borderColor: "primary.main",
            },
          }}
        >
          {language.addDropFiles}
        </Button>

        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={submitHandler}
          disabled={submitting || submissionFiles.length === 0}
          sx={{
            flex: { xs: "1 1 100%", sm: "1 1 220px" },
            textTransform: "none",
            fontWeight: 700,
            borderRadius: 1.2,
            py: 1.35,
            minHeight: 48,
            backgroundColor: "primary.main",
            color: "primary.contrastText",
            boxShadow: "0 8px 22px rgba(28, 55, 56, 0.35)",
            "&:hover": {
              backgroundColor: "base.mid",
              boxShadow: "0 10px 30px rgba(28, 55, 56, 0.45)",
              transform: "translateY(-1px)",
            },
          }}
        >
          {submitting ? language.loading || "Loading..." : language.send}
        </Button>
      </Box>
    </Box>
  );
}
