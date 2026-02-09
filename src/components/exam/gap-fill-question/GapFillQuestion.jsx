import { Box, Typography, TextField } from "@mui/material";

export default function GapFillQuestion( {isDisabled }) {
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
      {/* Question block */}
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
          At the moment, we’re finding it difficult to pay the bills, and a
          luxurious holiday is simply unaffordable. We’re really struggling to
          make <strong>_____</strong> meet.
        </Typography>

        <Typography
          sx={{
            mt: 1.5,
            fontSize: "0.85rem",
            color: "primary.main",
            fontStyle: "italic",
            fontWeight: 500,
          }}
        >
          Type correct answer below.
        </Typography>
      </Box>

      {/* Answer area */}
      <Box
        sx={{
          border: "1px solid",
          borderColor: "primary.main",
          p: 2,
          backgroundColor: "background.paper",
        }}
      >
        <TextField
          fullWidth
          disabled={isDisabled}
          placeholder="clue: e _ _ _ _ (one word)"
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              fontSize: "0.95rem",
              backgroundColor: "base.light",

              "& fieldset": {
                borderColor: "divider",
              },
              "&:hover fieldset": {
                borderColor: "primary.main",
              },
              "&.Mui-focused fieldset": {
                borderColor: "primary.main",
                borderWidth: "1px",
              },
            },

            "& input::placeholder": {
              color: "text.secondary",
              fontStyle: "italic",
            },
          }}
        />
      </Box>
    </Box>
  );
}
