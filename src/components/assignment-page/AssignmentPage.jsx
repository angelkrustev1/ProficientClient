import { Box, Typography, Button } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import DescriptionIcon from "@mui/icons-material/Description";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import useLanguage from "../../hooks/useLanguage";

export default function AssignmentPage() {
  const language = useLanguage();

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
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          mb: { xs: 2.5, md: 3 },
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
          {language.assignmentTitle}
        </Typography>

        <Typography
          sx={{
            maxWidth: 900,
            color: "text.secondary",
            fontSize: { xs: "0.92rem", sm: "0.96rem", md: "0.98rem" },
            lineHeight: { xs: 1.7, md: 1.8 },
          }}
        >
          Описание на заданието. Прегледай предоставените файлове и подготви
          своето решение за предаване.
        </Typography>
      </Box>

      {/* Files */}
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
            <PictureAsPdfIcon
              sx={{
                color: "primary.main",
                fontSize: { xs: 22, sm: 24 },
                flexShrink: 0,
              }}
            />
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
                task-details.pdf
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  color: "text.secondary",
                }}
              >
                0.9 MB
              </Typography>
            </Box>
          </Box>

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
            <DescriptionIcon
              sx={{
                color: "primary.main",
                fontSize: { xs: 22, sm: 24 },
                flexShrink: 0,
              }}
            />
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
                rubric.docx
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  color: "text.secondary",
                }}
              >
                0.3 MB
              </Typography>
            </Box>
          </Box>

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
            <InsertDriveFileIcon
              sx={{
                color: "primary.main",
                fontSize: { xs: 22, sm: 24 },
                flexShrink: 0,
              }}
            />
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
                examples.zip
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  color: "text.secondary",
                }}
              >
                5.2 MB
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Sticky action bar */}
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
          {language.send}
        </Button>
      </Box>
    </Box>
  );
}