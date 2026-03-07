import { Box } from "@mui/material";
import MultipleChoicesQuestion from "../multiple-choices-question/MultipleChoicesQuestion";
import GapFillQuestion from "../gap-fill-question/GapFillQuestion";
import Reading from "../reading/Reading";

export default function Questions({ isDisabled }) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: { xs: 2, sm: 2.5, md: 3 },
      }}
    >
      <MultipleChoicesQuestion isDisabled={isDisabled} />
      <GapFillQuestion isDisabled={isDisabled} />
      <Reading />
    </Box>
  );
}