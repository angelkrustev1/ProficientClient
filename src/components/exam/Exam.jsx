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
        maxWidth: 1200,
        mx: "auto",
        backgroundColor: "background.default",
        flexGrow: 1,
        px: 7,
        py: 3,
        border: "1px solid",
        borderColor: "divider",
        boxShadow: "0px 10px 24px rgba(0, 0, 0, 0.14)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{
          fontSize: "1.6rem",
          mt: 3,
          mb: 5,
          fontWeight: 600,
          color: "primary.main",
          letterSpacing: "0.02em",
          textShadow: "1px 1px 3px rgba(28, 55, 56, 0.2)",
        }}
      >
        Test
      </Typography>

      <Questions isDisabled={isDisabled} />

      {isDisabled ? (
        <StartButton onClick={startButtonHandler} />
      ) : (
        <SubmitButton />
      )}
    </Box>
  );
}
