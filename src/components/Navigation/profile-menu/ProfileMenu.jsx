// ProfileMenu.jsx
import {
  Backdrop,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Popover,
} from "@mui/material";
import { useState } from "react";

import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import CourseJoin from "../../course-join/CourseJoin";
import CourseCreate from "../../course-create/CourseCreate";
import Settings from "../../settings/Settings";
import useLanguage from "../../../hooks/useLanguage";

export default function ProfileMenu({ open, anchorEl, onClose }) {
  const [joinOpen, setJoinOpen] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [settingsOpen, settingsSetOpen] = useState(false);
  let language = useLanguage();

  const joinOpenHandler = () => {
    setJoinOpen(true);
    onClose();
  };
  const joinCloseHandler = () => setJoinOpen(false);
  const createOpenHandler = () => {
    setCreateOpen(true);
    onClose();
  };
  const createCloseHandler = () => setCreateOpen(false);
  const settingsOpenHandler = () => {
    settingsSetOpen(true);
    onClose();
  };
  const settingsCloseHandler = () => settingsSetOpen(false);

  return (
    <>
      {/* Backdrop */}
      <Backdrop
        open={open}
        onClick={onClose}
        sx={{
          zIndex: "modal",
          bgcolor: "rgba(0, 0, 0, 0.6)",
        }}
      />

      {/* Anchored popover menu */}
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
            borderRadius: 2,
            boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
            minWidth: 220,
            py: 1,
            mt: 1,
            color: "base.light",
            zIndex: 1301,
          },
        }}
      >
        <List>
          <ListItem
            button
            onClick={joinOpenHandler}
            sx={{
              "&:hover": {
                backgroundColor: "rgba(244, 255, 248, 0.1)",
              },
              cursor: "pointer",
            }}
          >
            <ListItemIcon sx={{ color: "base.light", minWidth: 36 }}>
              <MeetingRoomIcon />
            </ListItemIcon>
            <ListItemText primary={language.joinCourse} />
          </ListItem>

          <ListItem
            button
            onClick={createOpenHandler}
            sx={{
              "&:hover": {
                backgroundColor: "rgba(244, 255, 248, 0.1)",
              },
              cursor: "pointer",
            }}
          >
            <ListItemIcon sx={{ color: "base.light", minWidth: 36 }}>
              <GroupAddIcon />
            </ListItemIcon>
            <ListItemText primary={language.createCourse} />
          </ListItem>

          <ListItem
            button
            onClick={settingsOpenHandler}
            sx={{
              "&:hover": {
                backgroundColor: "rgba(244, 255, 248, 0.1)",
              },
              cursor: "pointer",
            }}
          >
            <ListItemIcon sx={{ color: "base.light", minWidth: 36 }}>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary={language.settings} />
          </ListItem>

          <ListItem
            button
            onClick={onClose}
            sx={{
              "&:hover": {
                backgroundColor: "rgba(244, 255, 248, 0.1)",
              },
              cursor: "pointer",
            }}
          >
            <ListItemIcon sx={{ color: "base.light", minWidth: 36 }}>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary={language.logout} />
          </ListItem>
        </List>
      </Popover>

      <CourseJoin open={joinOpen} onClose={joinCloseHandler} />
      <CourseCreate open={createOpen} onClose={createCloseHandler} />
      <Settings open={settingsOpen} onClose={settingsCloseHandler} />
    </>
  );
}
