import { Box, Typography, Button } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import DescriptionIcon from "@mui/icons-material/Description";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import useLanguage from "../../hooks/useLanguage";

export default function AssignmentPage() {
  let language = useLanguage();

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
      {/* Header */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 3 }}>
        <Typography
          sx={{
            fontSize: "1.35rem",
            fontWeight: 750,
            letterSpacing: "0.2px",
            color: "text.primary",
          }}
        >
          {language.assignmentTitle}
        </Typography>

        <Typography
          sx={{
            maxWidth: 900,
            color: "text.secondary",
            fontSize: "0.98rem",
            lineHeight: 1.8,
          }}
        >
          Описание на заданието. Прегледай предоставените файлове и подготви
          своето решение за предаване.
        </Typography>
      </Box>

      {/* Files — NORMAL FLOW */}
      <Box sx={{ mb: 10 }}>
        <Typography
          sx={{
            fontSize: "0.95rem",
            fontWeight: 700,
            letterSpacing: "0.15px",
            color: "text.primary",
            mb: 1.5,
          }}
        >
          {language.files}
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {/* File row */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              p: 1.5,
              borderRadius: 1.2,
              border: "1px solid",
              borderColor: "divider",
              backgroundColor: "background.paper",
              boxShadow: "0 6px 16px rgba(0, 15, 8, 0.08)",
            }}
          >
            <PictureAsPdfIcon sx={{ color: "primary.main" }} />
            <Box sx={{ flexGrow: 1 }}>
              <Typography sx={{ fontSize: "0.92rem", fontWeight: 600 }}>
                task-details.pdf
              </Typography>
              <Typography sx={{ fontSize: "0.8rem", color: "text.secondary" }}>
                0.9 MB
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              p: 1.5,
              borderRadius: 1.2,
              border: "1px solid",
              borderColor: "divider",
              backgroundColor: "background.paper",
              boxShadow: "0 6px 16px rgba(0, 15, 8, 0.08)",
            }}
          >
            <DescriptionIcon sx={{ color: "primary.main" }} />
            <Box sx={{ flexGrow: 1 }}>
              <Typography sx={{ fontSize: "0.92rem", fontWeight: 600 }}>
                rubric.docx
              </Typography>
              <Typography sx={{ fontSize: "0.8rem", color: "text.secondary" }}>
                0.3 MB
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              p: 1.5,
              borderRadius: 1.2,
              border: "1px solid",
              borderColor: "divider",
              backgroundColor: "background.paper",
              boxShadow: "0 6px 16px rgba(0, 15, 8, 0.08)",
            }}
          >
            <InsertDriveFileIcon sx={{ color: "primary.main" }} />
            <Box sx={{ flexGrow: 1 }}>
              <Typography sx={{ fontSize: "0.92rem", fontWeight: 600 }}>
                examples.zip
              </Typography>
              <Typography sx={{ fontSize: "0.8rem", color: "text.secondary" }}>
                5.2 MB
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* BUTTONS — STICKY BOTTOM ACTION BAR */}
      <Box
        sx={{
          position: "sticky",
          bottom: 0,
          left: 0,
          right: 0,

          mt: 2,
          pt: 2,
          pb: 2,

          backgroundColor: "background.default",
          borderTop: "1px solid",
          borderColor: "divider",

          display: "flex",
          gap: 2,
          flexWrap: "wrap",

          zIndex: 2,
        }}
      >
        <Button
          variant="outlined"
          startIcon={<AttachFileIcon />}
          sx={{
            flex: "1 1 280px",
            justifyContent: "flex-start",
            textTransform: "none",
            fontWeight: 600,
            borderRadius: 1.2,
            borderColor: "divider",
            color: "text.primary",
            backgroundColor: "background.paper",
            py: 1.35,
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
            flex: "1 1 220px",
            textTransform: "none",
            fontWeight: 700,
            borderRadius: 1.2,
            py: 1.35,
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
