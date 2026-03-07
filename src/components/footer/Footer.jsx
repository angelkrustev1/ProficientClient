import { Box, Typography, Container } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 1.8, sm: 2 },
        textAlign: "center",
        boxShadow: 3,
        width: "100%",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="body2"
          sx={{
            fontWeight: 500,
            fontSize: { xs: "0.78rem", sm: "0.82rem", md: "0.85rem" },
            letterSpacing: "0.04em",
            lineHeight: 1.6,
          }}
        >
          © {new Date().getFullYear()} PROFICIENT. ALL RIGHTS RESERVED.
        </Typography>
      </Container>
    </Box>
  );
}