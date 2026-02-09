import { Box, Typography } from "@mui/material";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import useLanguage from "../../../hooks/useLanguage";

export default function NoCourses() {
    let language = useLanguage()

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        flexGrow: 1,
        mt: 15,
      }}
    >
      <SchoolOutlinedIcon
        sx={{
          fontSize: 64,
          color: "primary.main",
          opacity: 0.85,
        }}
      />

      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{
          fontSize: "2rem",
          fontWeight: 600,
          color: "primary.main",
          letterSpacing: "0.03em",
          textShadow: "1px 1px 3px rgba(28, 55, 56, 0.2)",
        }}
      >
        {language.noCourses}
      </Typography>
    </Box>
  );
}
