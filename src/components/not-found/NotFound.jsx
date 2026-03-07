import { Box, Typography } from "@mui/material";
import SearchOffIcon from "@mui/icons-material/SearchOff";

export default function NotFound() {
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
        mt: { xs: 10, sm: 14, md: 15 },
        px: 2,
      }}
    >
      <SearchOffIcon
        sx={{
          fontSize: { xs: 52, sm: 64 },
          color: "primary.main",
          opacity: 0.85,
        }}
      />

      <Typography
        variant="h3"
        gutterBottom
        sx={{
          fontSize: { xs: "1.6rem", sm: "2rem" },
          fontWeight: 600,
          color: "primary.main",
          letterSpacing: "0.03em",
          lineHeight: 1.2,
          textShadow: "1px 1px 3px rgba(28, 55, 56, 0.2)",
        }}
      >
        Error 404
      </Typography>
    </Box>
  );
}