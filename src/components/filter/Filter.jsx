import { useContext, useMemo } from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Fade from "@mui/material/Fade";
import Grow from "@mui/material/Grow";
import CloseIcon from "@mui/icons-material/Close";
import { FilterContext } from "../../contexts/FilterContext";
import useLanguage from "../../hooks/useLanguage";

export default function Filter() {
  const language = useLanguage();
  const { filters, removeFilter, resetFilters } = useContext(FilterContext);

  const CLASS_LABELS = useMemo(
    () => ({
      "1st": language.firstGrade,
      "2nd": language.secondGrade,
      "3rd": language.thirdGrade,
      "4th": language.forthGrade,
      "5th": language.fifthGrade,
      "6th": language.sixthGrade,
      "7th": language.seventhGrade,
      "8th": language.eightGrade,
      "9th": language.ninthGrade,
      "10th": language.tenthGrade,
      "11th": language.eleventhGrade,
      "12th": language.twelwedGrade,
    }),
    [language]
  );

  const chips = useMemo(() => {
    const out = [];

    if (filters.class) {
      out.push({
        key: "class",
        label: CLASS_LABELS[filters.class] ?? null,
        onDelete: () => removeFilter("class"),
      });
    }

    if (filters.subject) {
      out.push({
        key: "subject",
        label:
          filters.subject === "bulgarian"
            ? language.bulgarian
            : language.english,
        onDelete: () => removeFilter("subject"),
      });
    }

    if (filters.type) {
      out.push({
        key: "type",
        label: filters.type === "exams" ? language.Finals : language.tests,
        onDelete: () => removeFilter("type"),
      });
    }

    return out.filter((c) => c.label);
  }, [filters, removeFilter, CLASS_LABELS, language]);

  if (chips.length === 0) return null;

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 1100,
          bgcolor: "background.paper",
          border: 1,
          borderColor: "divider",
          borderRadius: {
            xs: 1,
            sm: 1.4,
          },
          px: {
            xs: 1.5,
            sm: 2.5,
            md: 3,
          },
          py: {
            xs: 1.5,
            sm: 2,
            md: 2.25,
          },
          boxShadow: 3,
          transform: "translateY(0)",
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems={{ xs: "stretch", md: "center" }}
          spacing={{ xs: 1.5, sm: 2, md: 2.5 }}
        >
          <Typography
            variant="body2"
            fontWeight={700}
            color="text.primary"
            sx={{
              letterSpacing: "0.4px",
              opacity: 0.85,
              minWidth: { md: "fit-content" },
              textAlign: { xs: "left", md: "left" },
            }}
          >
            {language.filters}
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            flexWrap="wrap"
            sx={{
              flexGrow: 1,
              alignItems: "center",
            }}
          >
            {chips.map((chip, index) => (
              <Grow key={chip.key} in timeout={160 + index * 60}>
                <Chip
                  label={chip.label}
                  onDelete={chip.onDelete}
                  deleteIcon={<CloseIcon />}
                  sx={{
                    maxWidth: "100%",
                    borderRadius: 0.6,
                    bgcolor: "background.default",
                    border: 1,
                    borderColor: "divider",
                    color: "text.primary",
                    fontWeight: 600,
                    px: 0.5,
                    height: {
                      xs: 32,
                      sm: 34,
                    },
                    boxShadow: 1,
                    "& .MuiChip-label": {
                      px: 1,
                      whiteSpace: "nowrap",
                    },
                    "& .MuiChip-deleteIcon": {
                      color: "text.secondary",
                      transition: "color 0.2s ease",
                      "&:hover": {
                        color: "primary.main",
                      },
                    },
                  }}
                />
              </Grow>
            ))}
          </Stack>

          <Fade in timeout={220}>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "flex-start", md: "flex-end" },
              }}
            >
              <Button
                variant="text"
                size="small"
                onClick={resetFilters}
                sx={{
                  color: "primary.main",
                  fontWeight: 700,
                  textTransform: "none",
                  letterSpacing: "0.4px",
                  whiteSpace: "nowrap",
                  alignSelf: "flex-start",
                  px: 1,
                  minWidth: "fit-content",
                  "&:hover": {
                    bgcolor: "action.hover",
                  },
                }}
              >
                {language.clearAll}
              </Button>
            </Box>
          </Fade>
        </Stack>
      </Box>
    </Box>
  );
}