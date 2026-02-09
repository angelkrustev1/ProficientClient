import { Box, Button, Menu, MenuItem } from "@mui/material";
import Fade from "@mui/material/Fade";

import FilterListIcon from "@mui/icons-material/FilterList";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { useState } from "react";
import useLanguage from "../../../hooks/useLanguage";

export default function CourseMenu() {
  let language = useLanguage();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <Box
      sx={{
        zIndex: 10,
      }}
    >
      <Button
        id="filter-button"
        variant="text"
        startIcon={<FilterListIcon />}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        aria-controls={open ? "filter-menu" : undefined}
        onClick={handleClick}
        sx={{
          textTransform: "none",
          color: "primary.main",
        }}
      >
        {language.filters}
      </Button>

      <Menu
        id="filter-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slots={{ transition: Fade }}
        PaperProps={{
          elevation: 3,
          sx: {
            borderRadius: 1.4,
            minWidth: 180,
          },
        }}
      >
        <MenuItem onClick={handleClose}>
          <AssignmentIcon
            fontSize="small"
            sx={{ mr: 1, color: "primary.main" }}
          />
          {language.assignments}
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <MenuBookIcon
            fontSize="small"
            sx={{ mr: 1, color: "primary.main" }}
          />
          {language.materials}
        </MenuItem>
      </Menu>
    </Box>
  );
}
