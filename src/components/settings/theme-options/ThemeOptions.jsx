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
    changeCustomThemeHandler(name);
    handleClose();
  };

  return (
    <>
      <Button
        onClick={handleClick}
        variant="outlined"
        fullWidth
        sx={{
          bgcolor: "base.light",
          color: "base.mid",
          fontSize: { xs: "0.85rem", sm: "0.9rem" },
          px: { xs: 2, sm: 4 },
          py: 0.9,
          minWidth: { xs: "100%", sm: 170 },
          width: "100%",
          borderColor: "base.mid",
          fontWeight: 500,
          textTransform: "none",
          borderRadius: 1,
          justifyContent: "center",
          whiteSpace: "nowrap",
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
        keepMounted
        PaperProps={{
          sx: {
            width: { xs: 180, sm: 200 },
            maxHeight: 240,
            mt: 1,
            bgcolor: "base.light",
            color: "base.hard",
            borderRadius: 1,
            boxShadow: "0px 4px 15px rgba(0,0,0,0.15)",
            overflow: "hidden",
          },
        }}
        MenuListProps={{
          sx: {
            py: 0.5,
          },
        }}
      >
        <MenuItem
          onClick={() => chooseTheme("light")}
          sx={{
            fontSize: { xs: "0.9rem", sm: "0.95rem" },
            minHeight: 42,
          }}
        >
          {language.light}
        </MenuItem>
        <MenuItem
          onClick={() => chooseTheme("dark")}
          sx={{
            fontSize: { xs: "0.9rem", sm: "0.95rem" },
            minHeight: 42,
          }}
        >
          {language.dark}
        </MenuItem>
      </Menu>
    </>
  );
}