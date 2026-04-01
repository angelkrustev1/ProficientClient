import { Box, Button, Menu, MenuItem } from "@mui/material";
import Fade from "@mui/material/Fade";

import FilterListIcon from "@mui/icons-material/FilterList";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AppsIcon from "@mui/icons-material/Apps";
import CheckIcon from "@mui/icons-material/Check";
import { useState } from "react";
import useLanguage from "../../../hooks/useLanguage";

export default function CourseMenu({ filter, onFilterChange }) {
  const language = useLanguage();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const selectFilterHandler = (value) => {
    onFilterChange(value);
    handleClose();
  };

  const filterLabel =
    filter === "assignments"
      ? language.assignments
      : filter === "materials"
      ? language.materials
      : language.filters;

  return (
    <Box
      sx={{
        zIndex: 10,
        width: "fit-content",
        maxWidth: "100%",
      }}
    >
      <Button
        id="filter-button"
        variant="text"
        startIcon={<FilterListIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        aria-controls={open ? "filter-menu" : undefined}
        onClick={handleClick}
        sx={{
          textTransform: "none",
          color: "primary.main",
          fontWeight: 600,
          fontSize: { xs: "0.9rem", sm: "0.95rem" },
          px: { xs: 1, sm: 1.25 },
          py: 0.75,
          minWidth: 0,
          borderRadius: 1.2,
          whiteSpace: "nowrap",
          "&:hover": {
            backgroundColor: "action.hover",
          },
        }}
      >
        {filterLabel}
      </Button>

      <Menu
        id="filter-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slots={{ transition: Fade }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        PaperProps={{
          elevation: 3,
          sx: {
            mt: 0.75,
            borderRadius: 1.4,
            minWidth: { xs: 160, sm: 180 },
            border: "1px solid",
            borderColor: "divider",
            boxShadow: "0px 10px 24px rgba(0, 0, 0, 0.14)",
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
          onClick={() => selectFilterHandler("all")}
          sx={{
            gap: 1,
            py: 1,
            px: 1.5,
            fontSize: { xs: "0.9rem", sm: "0.95rem" },
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <AppsIcon
              fontSize="small"
              sx={{ color: "primary.main", flexShrink: 0 }}
            />
            {language.filters}
          </Box>

          {filter === "all" && <CheckIcon fontSize="small" color="primary" />}
        </MenuItem>

        <MenuItem
          onClick={() => selectFilterHandler("assignments")}
          sx={{
            gap: 1,
            py: 1,
            px: 1.5,
            fontSize: { xs: "0.9rem", sm: "0.95rem" },
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <AssignmentIcon
              fontSize="small"
              sx={{ color: "primary.main", flexShrink: 0 }}
            />
            {language.assignments}
          </Box>

          {filter === "assignments" && (
            <CheckIcon fontSize="small" color="primary" />
          )}
        </MenuItem>

        <MenuItem
          onClick={() => selectFilterHandler("materials")}
          sx={{
            gap: 1,
            py: 1,
            px: 1.5,
            fontSize: { xs: "0.9rem", sm: "0.95rem" },
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <MenuBookIcon
              fontSize="small"
              sx={{ color: "primary.main", flexShrink: 0 }}
            />
            {language.materials}
          </Box>

          {filter === "materials" && (
            <CheckIcon fontSize="small" color="primary" />
          )}
        </MenuItem>
      </Menu>
    </Box>
  );
}