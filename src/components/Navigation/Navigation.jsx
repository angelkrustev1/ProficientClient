import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuDrawer from "../menu-drawer/MenuDrawer";
import ProfileMenu from "./profile-menu/ProfileMenu";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router";
import SearchBar from "../search-bar/SearchBar";
import NoAuth from "./profile-menu/no-auth/NoAuth";
import useAuth from "../../hooks/useAuth";

export default function Navigation() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  const { email, isAuthenticated } = useAuth();

  const drawerOpenHandler = () => setDrawerOpen(true);
  const drawerCloseHandler = () => setDrawerOpen(false);

  const menuOpenHander = (e) => {
    setMenuAnchorEl(e.currentTarget);
    setMenuOpen(true);
  };

  const menuCloseHandler = () => {
    setMenuAnchorEl(null);
    setMenuOpen(false);
  };

  return (
    <>
      <Box>
        <AppBar position="static">
          <Toolbar
            sx={{
              minHeight: {
                xs: 72,
                md: 80,
              },
              px: {
                xs: 1.5,
                sm: 2,
                md: 3,
              },
              gap: {
                xs: 1,
                sm: 1.5,
              },
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              onClick={drawerOpenHandler}
              sx={{
                mr: {
                  xs: 0.5,
                  sm: 1,
                },
              }}
            >
              <MenuIcon />
            </IconButton>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexGrow: 1,
                minWidth: 0,
                gap: {
                  xs: 1,
                  md: 2,
                },
              }}
            >
              <Button
                component={Link}
                to="/"
                variant="text"
                sx={{
                  minWidth: "fit-content",
                  p: 0,
                  borderRadius: 1,
                }}
              >
                <Box
                  component="img"
                  src="/logo.png"
                  alt="Logo"
                  sx={{
                    height: {
                      xs: 42,
                      sm: 48,
                      md: 55,
                    },
                    width: "auto",
                    display: "block",
                  }}
                />
              </Button>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  flexGrow: 1,
                  minWidth: 0,
                  gap: {
                    xs: 0.5,
                    sm: 0.75,
                    md: 1,
                  },
                }}
              >
                <Box
                  sx={{
                    minWidth: 0,
                    width: {
                      xs: "100%",
                      sm: "auto",
                    },
                    maxWidth: {
                      xs: 160,
                      sm: 220,
                      md: 280,
                    },
                    flexShrink: 1,
                  }}
                >
                  {isAuthenticated && <SearchBar />}
                </Box>

                {isAuthenticated ? (
                  <>
                    <Typography
                      variant="body2"
                      title={email}
                      sx={{
                        display: { xs: "none", sm: "block" },
                        fontSize: {
                          sm: "0.95rem",
                          md: "1rem",
                        },
                        fontWeight: 500,
                        letterSpacing: "0.2px",
                        opacity: 0.9,
                        maxWidth: { sm: 140, md: 180, lg: 220 },
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {email}
                    </Typography>

                    <IconButton
                      color="inherit"
                      onClick={menuOpenHander}
                      sx={{
                        ml: {
                          xs: 0.25,
                          sm: 0.5,
                        },
                        flexShrink: 0,
                      }}
                    >
                      <AccountCircle
                        sx={{
                          fontSize: {
                            xs: 30,
                            sm: 32,
                          },
                        }}
                      />
                    </IconButton>

                    <ProfileMenu
                      open={menuOpen}
                      anchorEl={menuAnchorEl}
                      onClose={menuCloseHandler}
                    />
                  </>
                ) : (
                  <NoAuth />
                )}
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      <MenuDrawer open={drawerOpen} onClose={drawerCloseHandler} />
    </>
  );
}