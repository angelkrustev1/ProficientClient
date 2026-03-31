import { Box, Button, Menu, MenuItem } from "@mui/material";
import Fade from "@mui/material/Fade";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ScheduleIcon from "@mui/icons-material/Schedule";
import HistoryIcon from "@mui/icons-material/History";
import { useState } from "react";
import useLanguage from "../../../hooks/useLanguage";

export default function ChatMenu({ onChangeOrder }) {
  const language = useLanguage();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleOrderChange = (value) => {
    onChangeOrder(value);
    handleClose();
  };

  return (
    <Box
      sx={{
        zIndex: 10,
        width: "fit-content",
        maxWidth: "100%",
      }}
    >
      <Button
        id="order-button"
        variant="text"
        startIcon={<ArrowDownwardIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        aria-controls={open ? "order-menu" : undefined}
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
        {language.order}
      </Button>

      <Menu
        id="order-menu"
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
          onClick={() => handleOrderChange("newest")}
          sx={{
            gap: 1,
            py: 1,
            px: 1.5,
            fontSize: { xs: "0.9rem", sm: "0.95rem" },
          }}
        >
          <ScheduleIcon
            fontSize="small"
            sx={{ color: "primary.main", flexShrink: 0 }}
          />
          {language.newest}
        </MenuItem>

        <MenuItem
          onClick={() => handleOrderChange("oldest")}
          sx={{
            gap: 1,
            py: 1,
            px: 1.5,
            fontSize: { xs: "0.9rem", sm: "0.95rem" },
          }}
        >
          <HistoryIcon
            fontSize="small"
            sx={{ color: "primary.main", flexShrink: 0 }}
          />
          {language.oldest}
        </MenuItem>
      </Menu>
    </Box>
  );
}