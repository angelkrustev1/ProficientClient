import { Box, Typography } from "@mui/material";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import useLanguage from "../../../hooks/useLanguage";

export default function NoCourses() {
  const language = useLanguage();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: { xs: 1.5, sm: 2 },
        flexGrow: 1,
        mt: { xs: 8, sm: 12, md: 15 },
        px: 2,
        textAlign: "center",
      }}
    >
      <SchoolOutlinedIcon
        sx={{
          fontSize: { xs: 52, sm: 60, md: 64 },
          color: "primary.main",
          opacity: 0.85,
        }}
      />

      <Typography
        variant="h3"
        align="center"
        sx={{
          fontSize: { xs: "1.4rem", sm: "1.7rem", md: "2rem" },
          fontWeight: 600,
          color: "primary.main",
          letterSpacing: "0.03em",
          textShadow: "1px 1px 3px rgba(28, 55, 56, 0.2)",
          lineHeight: 1.2,
        }}
      >
        {language.noCourses}
      </Typography>
    </Box>
  );
}