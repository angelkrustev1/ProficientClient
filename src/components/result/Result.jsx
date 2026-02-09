import { Box, Typography, Button, Divider } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Questions from "../exam/questions/Questions";
import useLanguage from "../../hooks/useLanguage";

export default function TestResultPage() {
  let language = useLanguage();

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1100,
        mx: "auto",
        border: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.paper",
        boxShadow: "0 14px 32px rgba(0, 15, 8, 0.14)",
        p: 3,
      }}
    >
      {/* Top summary */}
      <Box
        sx={{
          position: "relative",
          border: "1px solid",
          borderColor: "primary.main",
          backgroundColor: "base.light",
          p: 2.5,
          mb: 2,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 5,
            height: "100%",
            bgcolor: "primary.main",
          }}
        />

        <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2, pl: 1.5 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box
              sx={{
                width: 42,
                height: 42,
                borderRadius: 1.2,
                bgcolor: "action.selected",
                color: "primary.main",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CheckCircleOutlineIcon />
            </Box>

            <Box>
              <Typography
                sx={{
                  fontSize: "1.1rem",
                  fontWeight: 800,
                  letterSpacing: "0.2px",
                  color: "text.primary",
                }}
              >
                {language.testResult}
              </Typography>

              <Typography
                sx={{
                  mt: 0.5,
                  fontSize: "0.92rem",
                  color: "text.secondary",
                }}
              >
                {language.time}: 26:14
              </Typography>
            </Box>
          </Box>

          <Box sx={{ textAlign: "right" }}>
            <Typography
              sx={{
                fontSize: "2.05rem",
                fontWeight: 900,
                letterSpacing: "0.3px",
                color: "text.primary",
                lineHeight: 1,
              }}
            >
              39 / 50
            </Typography>
            <Typography
              sx={{
                mt: 0.5,
                fontSize: "0.95rem",
                fontWeight: 800,
                color: "primary.main",
              }}
            >
              78%
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Stats row */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", sm: "1fr 1fr" },
          gap: 1.25,
          mb: 2,
        }}
      >
        {[
          { label: `${language.right}`, value: "39" },
          { label: `${language.wrong}`, value: "11" },
        ].map((item) => (
          <Box
            key={item.label}
            sx={{
              border: "1px solid",
              borderColor: "divider",
              backgroundColor: "background.paper",
              px: 2,
              py: 1.6,
              borderRadius: 1.2,
              boxShadow: "0 8px 18px rgba(0, 15, 8, 0.06)",
            }}
          >
            <Typography
              sx={{
                fontSize: "0.82rem",
                color: "text.secondary",
                letterSpacing: "0.2px",
              }}
            >
              {item.label}
            </Typography>
            <Typography
              sx={{
                mt: 0.35,
                fontSize: "1.15rem",
                fontWeight: 850,
                color: "text.primary",
              }}
            >
              {item.value}
            </Typography>
          </Box>
        ))}
      </Box>

      <Divider sx={{ borderColor: "divider", mb: 2 }} />

      {/* Full test render */}
      <Box
        sx={{
          border: "1px solid",
          borderColor: "primary.main",
          backgroundColor: "background.paper",
          p: 2,
          maxHeight: 520,
          overflowY: "auto",

          scrollbarWidth: "thin",
          scrollbarColor: "rgba(28, 55, 56, 0.35) transparent",
          "&::-webkit-scrollbar": { width: 10 },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(28, 55, 56, 0.35)",
            borderRadius: 10,
            border: "3px solid transparent",
            backgroundClip: "content-box",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "rgba(28, 55, 56, 0.55)",
          },
        }}
      >
        <Questions />
      </Box>
    </Box>
  );
}
