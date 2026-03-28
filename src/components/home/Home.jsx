import { Box, Typography } from "@mui/material";
import ActionCardCarousel from "../action-card-carousel/ActionCardCarousel";
import useLanguage from "../../hooks/useLanguage";

const sectionTitleStyles = {
  fontWeight: 600,
  color: "primary.main",
  letterSpacing: "0.03em",
  textShadow: "1px 1px 3px rgba(28, 55, 56, 0.2)",
  fontSize: {
    xs: "1.5rem",
    sm: "1.75rem",
    md: "2rem",
  },
  lineHeight: 1.2,
  mb: {
    xs: 2,
    sm: 2.5,
    md: 3,
  },
};

const sectionContainerStyles = {
  width: "100%",
  maxWidth: "1400px",
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  px: {
    xs: 1.5,
    sm: 2,
    md: 3,
  },
};

export default function Home() {
  const language = useLanguage();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexGrow: 1,
        width: "100%",
        my: {
          xs: 3,
          sm: 4,
          md: 5,
        },
        gap: {
          xs: 4,
          sm: 5,
          md: 6,
        },
      }}
    >
      
      <Box sx={sectionContainerStyles}>
        <Typography variant="h3" align="center" gutterBottom sx={sectionTitleStyles}>
          {language.finals}
        </Typography>

        <ActionCardCarousel />
      </Box>

      <Box sx={sectionContainerStyles}>
        <Typography variant="h3" align="center" gutterBottom sx={sectionTitleStyles}>
          {language.tests}
        </Typography>

        <ActionCardCarousel />
      </Box>
    </Box>
  );
}