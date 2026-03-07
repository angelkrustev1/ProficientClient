import {
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";

export default function MultipleChoicesQuestion({ isDisabled }) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 900,
        mx: "auto",
        border: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.paper",
        boxShadow: "0 10px 24px rgba(0, 15, 8, 0.14)",
        p: { xs: 1.5, sm: 2.5, md: 3 },
      }}
    >
      <Box
        sx={{
          border: "1px solid",
          borderColor: "primary.main",
          p: { xs: 1.5, sm: 2, md: 2.5 },
          mb: { xs: 2, sm: 2.5 },
          backgroundColor: "base.light",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "0.9rem", sm: "0.95rem" },
            color: "text.primary",
            lineHeight: 1.7,
            wordBreak: "break-word",
          }}
        >
          The Education Secretary negotiated with protesting teachers yesterday,
          and they have now insisted that she schedules a second meeting.
          <br />
          <br />
          The politician ______ an agreement with the teachers yesterday.
        </Typography>

        <Typography
          sx={{
            mt: 1.5,
            fontSize: { xs: "0.8rem", sm: "0.85rem" },
            color: "text.secondary",
            fontStyle: "italic",
            lineHeight: 1.5,
          }}
        >
          Choose{" "}
          <Box
            component="span"
            sx={{ color: "primary.main", fontWeight: 600 }}
          >
            one
          </Box>{" "}
          correct answer that reflects the outcome of the negotiation.
        </Typography>
      </Box>

      <RadioGroup>
        {[
          "must have reached",
          "needn't have reached",
          "shouldn't have reached",
          "can't have reached",
        ].map((option) => (
          <Box
            key={option}
            sx={{
              border: "1px solid",
              borderColor: "primary.main",
              mb: { xs: 1.25, sm: 1.5 },
              px: { xs: 1.25, sm: 1.5 },
              py: { xs: 0.75, sm: 1 },
              backgroundColor: "background.paper",
              transition: "background-color 0.2s ease",

              "&:hover": {
                backgroundColor: isDisabled ? "background.paper" : "action.hover",
              },
            }}
          >
            <FormControlLabel
              disabled={isDisabled}
              value={option}
              control={
                <Radio
                  sx={{
                    color: "primary.main",
                    p: { xs: 1, sm: 1.25 },
                    "&.Mui-checked": {
                      color: "primary.main",
                    },
                  }}
                />
              }
              label={
                <Typography
                  sx={{
                    fontSize: { xs: "0.9rem", sm: "0.95rem" },
                    color: "text.primary",
                    fontWeight: 500,
                    lineHeight: 1.5,
                    wordBreak: "break-word",
                  }}
                >
                  {option}
                </Typography>
              }
              sx={{
                width: "100%",
                m: 0,
                alignItems: "flex-start",
                "& .MuiFormControlLabel-label": {
                  pt: { xs: 0.35, sm: 0.45 },
                },
              }}
            />
          </Box>
        ))}
      </RadioGroup>
    </Box>
  );
}