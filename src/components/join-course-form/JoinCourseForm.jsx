import { useState } from "react";
import { useNavigate } from "react-router";
import {
  Alert,
  Box,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
  useMediaQuery,
  CircularProgress,
} from "@mui/material";
import TagIcon from "@mui/icons-material/Tag";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import useLanguage from "../../hooks/useLanguage";

export default function JoinCourseForm({ onJoin, loading }) {
  const isMobile = useMediaQuery("(max-width:600px)");
  const language = useLanguage();
  const navigate = useNavigate();

  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");

    const result = await onJoin(code);

    if (!result.success) {
      setError(result.error);
      return;
    }

    setCode("");
    navigate("/courses");
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: isMobile ? 400 : 600,
        mx: "auto",
        mb: 10,
      }}
    >
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: "center",
          px: 1.75,
          py: 1.5,
          bgcolor: "secondary.main",
          borderRadius: isMobile ? "8px" : "1400px",
          boxShadow: 3,
          width: "100%",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            color: "#ffffff",
            textAlign: isMobile ? "center" : "left",
            fontWeight: "bold",
            flexShrink: 0,
            fontSize: isMobile ? "1.2rem" : "1.4rem",
          }}
        >
          {language.joinCourse}
        </Typography>

        <Box
          component="form"
          onSubmit={submitHandler}
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "999px",
            bgcolor: "background.default",
            boxShadow: 2,
            flexGrow: 1,
            maxWidth: 300,
            width: "100%",
            justifyContent: "space-between",
            ml: isMobile ? 0 : 2,
            mt: isMobile ? 2 : 0,
          }}
        >
          <TextField
            fullWidth
            value={code}
            onChange={(e) => setCode(e.target.value.toUpperCase())}
            placeholder={language.enterCode || "Enter code"}
            size="small"
            variant="outlined"
            disabled={loading}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "999px",
                pl: 1,
                bgcolor: "background.default",
                color: "text.primary",
                "& fieldset": {
                  borderColor: "primary.main",
                },
                "&:hover fieldset": {
                  borderColor: "primary.main",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "primary.main",
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <TagIcon sx={{ color: "text.primary" }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton type="submit" disabled={loading} sx={{ color: "text.primary" }}>
                    {loading ? (
                      <CircularProgress size={20} color="inherit" />
                    ) : (
                      <ArrowForwardIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}