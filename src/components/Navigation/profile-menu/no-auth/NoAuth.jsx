import { Box, Button } from "@mui/material";
import Login from "../../../login/Login";
import Register from "../../../register/Register";
import { useState } from "react";
import useLanguage from "../../../../hooks/useLanguage";

export default function NoAuth() {
  const [loginOpen, loginSetOpen] = useState(false);
  const [registerOpen, registerSetOpen] = useState(false);
  const language = useLanguage();

  const loginOpenHandler = () => loginSetOpen(true);
  const loginCloseHandler = () => loginSetOpen(false);
  const registerOpenHandler = () => registerSetOpen(true);
  const registerCloseHandler = () => registerSetOpen(false);

  const actionButtonStyles = {
    color: "base.light",
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    textTransform: "none",
    fontWeight: 600,
    borderRadius: 1,
    minWidth: {
      xs: "auto",
      sm: 96,
    },
    px: {
      xs: 1.25,
      sm: 1.75,
    },
    py: {
      xs: 0.75,
      sm: 0.9,
    },
    fontSize: {
      xs: "0.9rem",
      sm: "0.95rem",
    },
    lineHeight: 1.2,
    whiteSpace: "nowrap",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.35)",
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: {
          xs: 0.75,
          sm: 1,
        },
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <Button onClick={loginOpenHandler} variant="text" sx={actionButtonStyles}>
        {language.login}
      </Button>

      <Button onClick={registerOpenHandler} variant="text" sx={actionButtonStyles}>
        {language.register}
      </Button>

      <Login open={loginOpen} onClose={loginCloseHandler} />
      <Register open={registerOpen} onClose={registerCloseHandler} />
    </Box>
  );
}