import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useParams } from "react-router";
import useLanguage from "../../../hooks/useLanguage";
import useMaterialDetails from "../../../hooks/useMaterialDetails";

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

export default function MaterialPage() {
  const language = useLanguage();
  const { materialId, courseId } = useParams();
  const { material, loading, error } = useMaterialDetails(materialId);

  if (loading) {
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

  if (!material) {
    return (
      <Box sx={{ width: "100%", maxWidth: 1200, mx: "auto", px: 2, py: 4 }}>
        <Alert severity="warning">{language.MaterialNotFound}</Alert>
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
          pb: { xs: 2.5, md: 3 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            minWidth: 0,
            flex: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "1.12rem", sm: "1.22rem", md: "1.35rem" },
              fontWeight: 750,
              letterSpacing: "0.2px",
              color: "text.primary",
              lineHeight: 1.3,
            }}
          >
            {material.title}
          </Typography>

          <Typography
            sx={{
              maxWidth: 900,
              color: "text.secondary",
              fontSize: { xs: "0.92rem", sm: "0.96rem", md: "0.98rem" },
              lineHeight: { xs: 1.7, md: 1.8 },
            }}
          >
            {material.description || "No description"}
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

            color: 'text.primary',
            backgroundColor: "transparent",

            "&:hover": {
              backgroundColor: 'action.hover',
            },

            "&:active": {
              backgroundColor: 'action.selected',
            },
          }}
        >
          {language.back || "Back to course"}
        </Button>
      </Box>

      <Box sx={{ height: { xs: 12, sm: 18, md: 24 } }} />

      <Box
        sx={{
          pt: { xs: 2.5, md: 3 },
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
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

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          {material.files?.length > 0 ? (
            material.files.map((file) => (
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
                        color: "text.primary",
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
    </Box>
  );
}
