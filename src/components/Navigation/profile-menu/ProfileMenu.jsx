import {
  Backdrop,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Popover,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";

import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import CourseJoin from "../../course-join/CourseJoin";
import CourseCreate from "../../course-create/CourseCreate";
import Settings from "../../settings/Settings";
import useLanguage from "../../../hooks/useLanguage";
import useAuth from "../../../hooks/useAuth";

export default function ProfileMenu({ open, anchorEl, onClose }) {
  const [joinOpen, setJoinOpen] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [settingsOpen, settingsSetOpen] = useState(false);

  const language = useLanguage();
  const { userLogoutHandler } = useAuth();
  const navigate = useNavigate();

  // const joinOpenHandler = () => {
  //   setJoinOpen(true);
  //   onClose();
  // };

  const joinCloseHandler = () => setJoinOpen(false);

  // const createOpenHandler = () => {
  //   setCreateOpen(true);
  //   onClose();
  // };

  const createCloseHandler = () => setCreateOpen(false);

  const settingsOpenHandler = () => {
    settingsSetOpen(true);
    onClose();
  };

  const settingsCloseHandler = () => settingsSetOpen(false);

  const logoutHandler = async () => {
    await userLogoutHandler();
    onClose();
    navigate("/");
  };

  const menuItemStyles = {
    px: {
      xs: 1.5,
      sm: 2,
    },
    py: 1.1,
    minHeight: {
      xs: 46,
      sm: 48,
    },
    transition: "background-color 0.2s ease",
    "&:hover": {
      backgroundColor: "rgba(244, 255, 248, 0.1)",
    },
  };

  return (
    <>
      <Backdrop
        open={open}
        onClick={onClose}
        sx={{
          zIndex: "modal",
          bgcolor: "rgba(0, 0, 0, 0.6)",
        }}
      />

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          onClick: (e) => e.stopPropagation(),
          sx: {
            backgroundColor: "base.mid",
            borderRadius: 1.5,
            boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
            width: {
              xs: "calc(100vw - 24px)",
              sm: 240,
            },
            maxWidth: 240,
            py: 0.75,
            mt: 1,
            color: "base.light",
            zIndex: 1301,
            overflow: "hidden",
          },
        }}
      >
        <List disablePadding>
          <ListItemButton onClick={settingsOpenHandler} sx={menuItemStyles}>
            <ListItemIcon
              sx={{
                color: "base.light",
                minWidth: {
                  xs: 34,
                  sm: 36,
                },
              }}
            >
              <SettingsIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary={language.settings}
              primaryTypographyProps={{
                fontSize: {
                  xs: "0.95rem",
                  sm: "1rem",
                },
                fontWeight: 500,
                lineHeight: 1.2,
              }}
            />
          </ListItemButton>

          <ListItemButton onClick={logoutHandler} sx={menuItemStyles}>
            <ListItemIcon
              sx={{
                color: "base.light",
                minWidth: {
                  xs: 34,
                  sm: 36,
                },
              }}
            >
              <LogoutIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary={language.logout}
              primaryTypographyProps={{
                fontSize: {
                  xs: "0.95rem",
                  sm: "1rem",
                },
                fontWeight: 500,
                lineHeight: 1.2,
              }}
            />
          </ListItemButton>
        </List>
      </Popover>

      <CourseJoin open={joinOpen} onClose={joinCloseHandler} />
      <CourseCreate open={createOpen} onClose={createCloseHandler} />
      <Settings open={settingsOpen} onClose={settingsCloseHandler} />
    </>
  );
}