import { Box, Typography } from "@mui/material";
import Questions from "./questions/Questions";
import SubmitButton from "./submit-button/SubmitButton";
import StartButton from "./start-button/StartButton";
import { useSearchParams } from "react-router";

export default function Exam() {
  const [searchParams, setSearchParams] = useSearchParams();

  const mode = searchParams.get("mode") ?? "view";
  const isDisabled = mode === "view";

  const startButtonHandler = () => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set("mode", "active");
      return next;
    });
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1200px",
        mx: "auto",
        flexGrow: 1,
        backgroundColor: "background.default",
        px: { xs: 1.5, sm: 2.5, md: 4, lg: 6 },
        py: { xs: 2, sm: 3, md: 4 },
        border: "1px solid",
        borderColor: "divider",
        boxShadow: "0px 10px 24px rgba(0, 0, 0, 0.14)",
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h3"
        align="center"
        sx={{
          fontSize: { xs: "1.35rem", sm: "1.55rem", md: "1.8rem" },
          mt: { xs: 0.5, sm: 1, md: 1.5 },
          mb: { xs: 2.5, sm: 3.5, md: 4.5 },
          fontWeight: 600,
          color: "primary.main",
          letterSpacing: "0.02em",
          textShadow: "1px 1px 3px rgba(28, 55, 56, 0.2)",
          lineHeight: 1.2,
          px: 1,
          wordBreak: "break-word",
        }}
      >
        Test
      </Typography>

      <Box
        sx={{
          width: "100%",
        }}
      >
        <Questions isDisabled={isDisabled} />
      </Box>

      <Box
        sx={{
          mt: { xs: 3, sm: 4, md: 5 },
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {isDisabled ? (
          <StartButton onClick={startButtonHandler} />
        ) : (
          <SubmitButton />
        )}
      </Box>
    </Box>
  );
}