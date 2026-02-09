import { useContext, useState } from "react";
import { Button, Menu, MenuItem, Fade } from "@mui/material";
import { CustomThemeContext } from "../../../contexts/CustomThemeContext";
import useLanguage from "../../../hooks/useLanguage";

export default function ThemeOptions() {
  const language = useLanguage();
  const [anchorEl, setAnchorEl] = useState(null);

  const { changeCustomThemeHandler } = useContext(CustomThemeContext);
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const chooseTheme = (name) => {
    changeCustomThemeHandler(name); // "light" | "dark"
    handleClose();
  };

  return (
    <>
      <Button
        onClick={handleClick}
        variant="outlined"
        sx={{
          bgcolor: "base.light",
          color: "base.mid",
          fontSize: "0.9rem",
          px: 4,
          py: 0.5,
          minWidth: "170px",
          borderColor: "base.mid",
          fontWeight: 500,
          textTransform: "none",
          borderRadius: 2,
          "&:hover": {
            bgcolor: "base.soft",
            color: "base.hard",
            borderColor: "base.soft",
          },
        }}
      >
        {language.theme}
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        PaperProps={{
          sx: {
            width: 200,
            maxHeight: 240,
            bgcolor: "base.light",
            color: "base.hard",
            borderRadius: 2,
            boxShadow: "0px 4px 15px rgba(0,0,0,0.15)",
          },
        }}
      >
        <MenuItem onClick={() => chooseTheme("light")}>{language.light}</MenuItem>
        <MenuItem onClick={() => chooseTheme("dark")}>{language.dark}</MenuItem>
      </Menu>
    </>
  );
}
