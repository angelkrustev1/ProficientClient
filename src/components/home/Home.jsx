import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import ActionCardCarousel from "../action-card-carousel/ActionCardCarousel";
import Filter from "../filter/Filter";
import { FilterContext } from "../../contexts/FilterContext";
import useLanguage from "../../hooks/useLanguage";

export default function Home() {
  let language = useLanguage();
  const { filters } = useContext(FilterContext);

  const hasActiveFilters = Object.values(filters).some(
    (value) => value !== null
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexGrow: 1,
        my: 5,
        gap: 5,
      }}
    >
      {hasActiveFilters && <Filter />}

      <Box>
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
          {language.finals}
        </Typography>

        <ActionCardCarousel />
      </Box>

      <Box>
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
          {language.tests}
        </Typography>

        <ActionCardCarousel />
      </Box>
    </Box>
  );
}
