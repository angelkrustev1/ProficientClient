import {
  Box,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";

import Fade from "@mui/material/Fade";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ScheduleIcon from "@mui/icons-material/Schedule";
import HistoryIcon from "@mui/icons-material/History";
import { useState } from "react";
import useLanguage from "../../../hooks/useLanguage";

export default function ChatMenu() {
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
        id="order-button"
        variant="text"
        startIcon={<ArrowDownwardIcon />}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        aria-controls={open ? "order-menu" : undefined}
        onClick={handleClick}
        sx={{
          textTransform: "none",
          color: "primary.main",
        }}
      >
        {language.order}
      </Button>

      <Menu
        id="order-menu"
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
          <ScheduleIcon
            fontSize="small"
            sx={{ mr: 1, color: "primary.main" }}
          />
          {language.newest}
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <HistoryIcon
            fontSize="small"
            sx={{ mr: 1, color: "primary.main" }}
          />
          {language.oldest}
        </MenuItem>
      </Menu>
    </Box>
  );
}
