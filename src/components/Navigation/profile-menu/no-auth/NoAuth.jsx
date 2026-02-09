import { Box, Button } from "@mui/material";
import Login from "../../../login/Login";
import Register from "../../../register/Register";
import { useState } from "react";
import useLanguage from "../../../../hooks/useLanguage";

export default function NoAuth() {
  const [loginOpen, loginSetOpen] = useState(false);
  const [registerOpen, registerSetOpen] = useState(false);
  let language = useLanguage();

  const loginOpenHandler = () => loginSetOpen(true);
  const loginCloseHandler = () => loginSetOpen(false);
  const registerOpenHandler = () => registerSetOpen(true);
  const registerCloseHandler = () => registerSetOpen(false);

  return (
    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
      <Button
        onClick={loginOpenHandler}
        variant="text"
        sx={{
          color: "base.light",
          backgroundColor: "rgba(0, 0, 0, 0.25)", // softer than base.dark
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.35)",
          },
        }}
      >
        {language.login}
      </Button>

      <Button
        onClick={registerOpenHandler}
        variant="text"
        sx={{
          color: "base.light",
          backgroundColor: "rgba(0, 0, 0, 0.25)",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.35)",
          },
        }}
      >
        {language.register}
      </Button>

      <Login open={loginOpen} onClose={loginCloseHandler} />
      <Register open={registerOpen} onClose={registerCloseHandler} />
    </Box>
  );
}
