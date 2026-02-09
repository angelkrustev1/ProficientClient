import { Box, Typography, Container } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        textAlign: 'center',
        boxShadow: 3,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="body2"
          sx={{
            fontWeight: 500,
          }}
        >
          © {new Date().getFullYear()} PROFICIENT. ALL RIGHTS RESERVED.
        </Typography>
      </Container>
    </Box>
  );
}
