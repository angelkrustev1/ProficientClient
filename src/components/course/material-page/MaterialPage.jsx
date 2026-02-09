import { Box, Typography } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import useLanguage from "../../../hooks/useLanguage";

export default function MaterialPage() {
  let language = useLanguage()

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
      {/* Header + content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          pb: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: "1.35rem",
            fontWeight: 750,
            letterSpacing: "0.2px",
            color: "text.primary",
          }}
        >
          Title
        </Typography>

        <Typography
          sx={{
            maxWidth: 900,
            color: "text.secondary",
            fontSize: "0.98rem",
            lineHeight: 1.8,
          }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat non
          qui vel tempora porro dolorum eveniet commodi modi, rem quas, optio
          aperiam consequuntur, tempore iste? Est sint minus repudiandae
          excepturi?
        </Typography>
      </Box>

      {/* Spacer to push files section visually to bottom */}
      <Box sx={{ height: 24 }} />

      {/* Files section (BOTTOM) */}
      <Box
        sx={{
          pt: 3,
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
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

        {/* File list */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
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
              <Typography
                sx={{
                  fontSize: "0.92rem",
                  fontWeight: 600,
                  color: "text.primary",
                }}
              >
                lecture-notes.pdf
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  color: "text.secondary",
                }}
              >
                2.4 MB
              </Typography>
            </Box>
          </Box>

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
            <DescriptionIcon sx={{ color: "primary.main" }} />
            <Box sx={{ flexGrow: 1 }}>
              <Typography
                sx={{
                  fontSize: "0.92rem",
                  fontWeight: 600,
                  color: "text.primary",
                }}
              >
                assignment-instructions.docx
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  color: "text.secondary",
                }}
              >
                1.1 MB
              </Typography>
            </Box>
          </Box>

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
            <InsertDriveFileIcon sx={{ color: "primary.main" }} />
            <Box sx={{ flexGrow: 1 }}>
              <Typography
                sx={{
                  fontSize: "0.92rem",
                  fontWeight: 600,
                  color: "text.primary",
                }}
              >
                references.zip
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  color: "text.secondary",
                }}
              >
                6.8 MB
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
