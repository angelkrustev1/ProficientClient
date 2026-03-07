import { Box, Typography } from "@mui/material";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import useLanguage from "../../../hooks/useLanguage";

export default function NoMaterials() {
  const language = useLanguage();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: { xs: 1.5, sm: 2 },
        flexGrow: 1,
        mt: { xs: 10, sm: 12, md: 15 },
        px: 2,
      }}
    >
      <AssignmentOutlinedIcon
        sx={{
          fontSize: { xs: 48, sm: 56, md: 64 },
          color: "primary.main",
          opacity: 0.85,
        }}
      />

      <Typography
        align="center"
        sx={{
          fontSize: { xs: "1.4rem", sm: "1.7rem", md: "2rem" },
          fontWeight: 600,
          color: "primary.main",
          letterSpacing: "0.03em",
          textShadow: "1px 1px 3px rgba(28, 55, 56, 0.2)",
          lineHeight: 1.3,
        }}
      >
        {language.noMaterials}
      </Typography>
    </Box>
  );
}