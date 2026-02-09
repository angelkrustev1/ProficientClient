import { Box, Typography, Radio, RadioGroup, FormControlLabel } from "@mui/material";

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
        p: 3,
      }}
    >
      {/* Question text */}
      <Box
        sx={{
          border: "1px solid",
          borderColor: "primary.main",
          p: 2.5,
          mb: 2.5,
          backgroundColor: "base.light",
        }}
      >
        <Typography
          sx={{
            fontSize: "0.95rem",
            color: "text.primary",
            lineHeight: 1.7,
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
            fontSize: "0.85rem",
            color: "text.secondary",
            fontStyle: "italic",
          }}
        >
          Choose <Box component="span" sx={{ color: "primary.main", fontWeight: 600 }}>one</Box> correct answer that reflects the outcome of the negotiation.
        </Typography>
      </Box>

      {/* Answers */}
      <RadioGroup disabled={isDisabled}>
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
              mb: 1.5,
              px: 1.5,
              py: 1,
              backgroundColor: "background.paper",

              "&:hover": {
                backgroundColor: "action.hover",
              },
            }}
          >
            <FormControlLabel
              value={option}
              control={
                <Radio
                  sx={{
                    color: "primary.main",
                    "&.Mui-checked": {
                      color: "primary.main",
                    },
                  }}
                />
              }
              label={
                <Typography
                  sx={{
                    fontSize: "0.95rem",
                    color: "text.primary",
                    fontWeight: 500,
                  }}
                >
                  {option}
                </Typography>
              }
              sx={{ width: "100%", m: 0 }}
            />
          </Box>
        ))}
      </RadioGroup>
    </Box>
  );
}
