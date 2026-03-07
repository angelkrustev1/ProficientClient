import { Box, Typography } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import useLanguage from "../../../hooks/useLanguage";

export default function MaterialPage() {
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
      {/* Header + content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          pb: { xs: 2.5, md: 3 },
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
          Title
        </Typography>

        <Typography
          sx={{
            maxWidth: 900,
            color: "text.secondary",
            fontSize: { xs: "0.92rem", sm: "0.96rem", md: "0.98rem" },
            lineHeight: { xs: 1.7, md: 1.8 },
          }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat non
          qui vel tempora porro dolorum eveniet commodi modi, rem quas, optio
          aperiam consequuntur, tempore iste? Est sint minus repudiandae
          excepturi?
        </Typography>
      </Box>

      <Box sx={{ height: { xs: 12, sm: 18, md: 24 } }} />

      {/* Files section */}
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
                  color: "text.primary",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
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
                  color: "text.primary",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
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
                  color: "text.primary",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
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