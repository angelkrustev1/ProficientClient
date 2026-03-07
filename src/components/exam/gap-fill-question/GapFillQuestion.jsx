import { Box, Typography, TextField } from "@mui/material";

export default function GapFillQuestion({ isDisabled }) {
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
          At the moment, we’re finding it difficult to pay the bills, and a
          luxurious holiday is simply unaffordable. We’re really struggling to
          make <strong>_____</strong> meet.
        </Typography>

        <Typography
          sx={{
            mt: 1.5,
            fontSize: { xs: "0.8rem", sm: "0.85rem" },
            color: "primary.main",
            fontStyle: "italic",
            fontWeight: 500,
            lineHeight: 1.5,
          }}
        >
          Type correct answer below.
        </Typography>
      </Box>

      <Box
        sx={{
          border: "1px solid",
          borderColor: "primary.main",
          p: { xs: 1.25, sm: 1.5, md: 2 },
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
              fontSize: { xs: "0.9rem", sm: "0.95rem" },
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

            "& .MuiInputBase-input": {
              py: { xs: 1.2, sm: 1.4 },
            },

            "& input::placeholder": {
              color: "text.secondary",
              fontStyle: "italic",
              opacity: 1,
            },
          }}
        />
      </Box>
    </Box>
  );
}