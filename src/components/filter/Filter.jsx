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
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          width: "100%",
          maxWidth: 1100,
          bgcolor: "background.paper",
          border: 1,
          borderColor: "divider",
          borderRadius: 1.4,
          px: 3,
          py: 2.25,
          boxShadow: 3,
          transform: "translateY(0)",
        }}
      >
        <Stack direction="row" alignItems="center" spacing={2.5} flexWrap="wrap">
          <Typography
            variant="body2"
            fontWeight={700}
            color="text.primary"
            sx={{ letterSpacing: "0.4px", opacity: 0.85 }}
          >
            {language.Filters}
          </Typography>

          <Stack direction="row" spacing={1.25} flexWrap="wrap" sx={{ flexGrow: 1 }}>
            {chips.map((chip, index) => (
              <Grow key={chip.key} in timeout={160 + index * 60}>
                <Chip
                  label={chip.label}
                  onDelete={chip.onDelete}
                  deleteIcon={<CloseIcon />}
                  sx={{
                    borderRadius: 0.6,
                    bgcolor: "background.default",
                    border: 1,
                    borderColor: "divider",
                    color: "text.primary",
                    fontWeight: 600,
                    px: 0.5,
                    boxShadow: 1,
                    "& .MuiChip-deleteIcon": {
                      color: "text.secondary",
                      transition: "color 0.2s ease",
                      "&:hover": { color: "primary.main" },
                    },
                  }}
                />
              </Grow>
            ))}
          </Stack>

          <Fade in timeout={220}>
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
                px: 1,
                "&:hover": { bgcolor: "action.hover" },
              }}
            >
              {language.clearAll}
            </Button>
          </Fade>
        </Stack>
      </Box>
    </Box>
  );
}
