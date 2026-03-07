import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import SchoolIcon from "@mui/icons-material/School";
import { Link } from "react-router";

const drawerWidth = 250;

export default function MenuDrawer({ open, onClose }) {
  const courses = ["Math", "Physics", "Computer Science", "Biology"];

  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={onClose}
      ModalProps={{ keepMounted: true }}
      sx={{
        "& .MuiDrawer-paper": {
          width: {
            xs: "82vw",
            sm: drawerWidth,
          },
          maxWidth: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Box
        sx={{
          overflow: "auto",
          p: {
            xs: 1.5,
            sm: 2,
          },
        }}
      >
        <Button
          variant="text"
          component={Link}
          to="/courses"
          fullWidth
          sx={{
            justifyContent: "flex-start",
            alignItems: "center",
            fontWeight: 600,
            textTransform: "none",
            letterSpacing: "0.2px",
            color: "primary.main",
            px: 1,
            py: 1,
            mb: 1,
            borderRadius: 1,
            fontSize: {
              xs: "0.95rem",
              sm: "1rem",
            },

            "&:hover": {
              bgcolor: "action.hover",
            },
          }}
        >
          Курсове
        </Button>

        <Divider sx={{ mb: 1.5 }} />

        <List disablePadding>
          {courses.map((course) => (
            <ListItem key={course} disablePadding>
              <ListItemButton
                component={Link}
                to="/courses/:courseId"
                sx={{
                  borderRadius: 1,
                  mx: 0.5,
                  mb: 0.5,
                  px: 1.25,
                  py: 1,
                  minHeight: {
                    xs: 44,
                    sm: 46,
                  },
                  alignItems: "center",

                  "&:hover": {
                    bgcolor: "action.hover",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: {
                      xs: 34,
                      sm: 36,
                    },
                  }}
                >
                  <SchoolIcon color="primary" fontSize="small" />
                </ListItemIcon>

                <ListItemText
                  primary={course}
                  primaryTypographyProps={{
                    fontWeight: 500,
                    fontSize: {
                      xs: "0.95rem",
                      sm: "1rem",
                    },
                    lineHeight: 1.2,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}