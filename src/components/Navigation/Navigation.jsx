// Navigation.jsx
import { useContext, useMemo, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuDrawer from "../menu-drawer/MenuDrawer";
import ProfileMenu from "./profile-menu/ProfileMenu";
import {
  Button,
  Popover,
  List,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import { Link, useLocation } from "react-router";
import SearchBar from "../search-bar/SearchBar";
import { FilterContext } from "../../contexts/FilterContext";
import useLanguage from "../../hooks/useLanguage";

export default function Navigation() {
  const { pathname } = useLocation();
  const language = useLanguage();
  const canUseFilters = pathname === "/";

  const { filters, setFilter, removeFilter, resetFilters } =
    useContext(FilterContext);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  const [classAnchorEl, setClassAnchorEl] = useState(null);
  const [subjectAnchorEl, setSubjectAnchorEl] = useState(null);

  const classes = useMemo(() => Array.from({ length: 12 }, (_, i) => i + 1), []);

  const CLASS_VALUES = useMemo(
    () => ({
      1: "1st",
      2: "2nd",
      3: "3rd",
      4: "4th",
      5: "5th",
      6: "6th",
      7: "7th",
      8: "8th",
      9: "9th",
      10: "10th",
      11: "11th",
      12: "12th",
    }),
    []
  );

  const CLASS_LABELS = useMemo(
    () => ({
      1: language.firstGrade,
      2: language.secondGrade,
      3: language.thirdGrade,
      4: language.forthGrade,
      5: language.fifthGrade,
      6: language.sixthGrade,
      7: language.seventhGrade,
      8: language.eightGrade,
      9: language.ninthGrade,
      10: language.tenthGrade,
      11: language.eleventhGrade,
      12: language.twelwedGrade,
    }),
    [
      language.firstGrade,
      language.secondGrade,
      language.thirdGrade,
      language.forthGrade,
      language.fifthGrade,
      language.sixthGrade,
      language.seventhGrade,
      language.eightGrade,
      language.ninthGrade,
      language.tenthGrade,
      language.eleventhGrade,
      language.twelwedGrade,
    ]
  );

  const subjects = useMemo(
    () => [
      { key: "bulgarian", label: language.bulgarian },
      { key: "english", label: language.english },
    ],
    [language.bulgarian, language.english]
  );

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

  const openClass = (e) => {
    if (!canUseFilters) return;
    setClassAnchorEl(e.currentTarget);
    setSubjectAnchorEl(null);
  };

  const closeClass = () => setClassAnchorEl(null);

  const openSubject = (e) => {
    if (!canUseFilters) return;
    setSubjectAnchorEl(e.currentTarget);
    setClassAnchorEl(null);
  };

  const closeSubject = () => setSubjectAnchorEl(null);

  const closeAllDropdowns = () => {
    closeClass();
    closeSubject();
  };

  const toggleValue = (key, value) => {
    if (!canUseFilters) return;

    if (filters[key] === value) removeFilter(key);
    else setFilter(key, value);
  };

  const toggleType = (value) => {
    if (!canUseFilters) return;

    if (filters.type === value) removeFilter("type");
    else setFilter("type", value);
  };

  const onResetFilters = () => {
    if (!canUseFilters) return;
    resetFilters();
  };

  const navButtonStyles = {
    color: "inherit",
    textTransform: "none",
    fontWeight: 600,
    borderRadius: 1,
    px: {
      xs: 1,
      md: 1.25,
    },
    py: 0.75,
    minWidth: "fit-content",
    whiteSpace: "nowrap",
    fontSize: {
      xs: "0.9rem",
      md: "0.95rem",
    },
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.08)",
    },
  };

  const popoverStyles = {
    width: {
      xs: 200,
      sm: 220,
    },
    maxWidth: "calc(100vw - 24px)",
    borderRadius: 0.75,
    backgroundColor: "base.mid",
    color: "base.light",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.3)",
    maxHeight: {
      xs: 320,
      sm: 420,
    },
    overflowY: "auto",
  };

  const listItemStyles = {
    px: {
      xs: 2,
      sm: 2.5,
    },
    py: 1,
    minHeight: 42,
    "&:hover": {
      backgroundColor: "rgba(244, 255, 248, 0.08)",
    },
    "& .MuiListItemText-primary": {
      whiteSpace: "nowrap",
      fontSize: {
        xs: "0.92rem",
        sm: "0.96rem",
      },
      fontWeight: 500,
    },
  };

  const dividerSx = { backgroundColor: "rgba(244,255,248,0.2)" };

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
                  <SearchBar />
                </Box>

                <Box
                  sx={{
                    display: {
                      xs: "none",
                      lg: "flex",
                    },
                    alignItems: "center",
                    gap: 0.5,
                    flexShrink: 0,
                  }}
                >
                  <Button variant="text" onClick={openClass} sx={navButtonStyles}>
                    {language.class}
                  </Button>

                  <Button variant="text" onClick={openSubject} sx={navButtonStyles}>
                    {language.subject}
                  </Button>

                  <Button
                    variant="text"
                    onClick={() => toggleType("exams")}
                    sx={navButtonStyles}
                  >
                    {language.finals}
                  </Button>

                  <Button
                    variant="text"
                    onClick={() => toggleType("tests")}
                    sx={navButtonStyles}
                  >
                    {language.tests}
                  </Button>
                </Box>

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
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      <MenuDrawer open={drawerOpen} onClose={drawerCloseHandler} />

      <Popover
        open={Boolean(classAnchorEl) && canUseFilters}
        anchorEl={classAnchorEl}
        onClose={closeClass}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        PaperProps={{ sx: popoverStyles }}
      >
        <List disablePadding>
          {classes.map((c, idx) => {
            const value = CLASS_VALUES[c];

            return (
              <Box key={c}>
                <ListItemButton
                  sx={listItemStyles}
                  onClick={() => {
                    toggleValue("class", value);
                    closeAllDropdowns();
                  }}
                >
                  <ListItemText primary={CLASS_LABELS[c]} />
                </ListItemButton>
                {idx !== classes.length - 1 && <Divider sx={dividerSx} />}
              </Box>
            );
          })}
        </List>
      </Popover>

      <Popover
        open={Boolean(subjectAnchorEl) && canUseFilters}
        anchorEl={subjectAnchorEl}
        onClose={closeSubject}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        PaperProps={{ sx: popoverStyles }}
      >
        <List disablePadding>
          {subjects.map((s, idx) => (
            <Box key={s.key}>
              <ListItemButton
                sx={listItemStyles}
                onClick={() => {
                  toggleValue("subject", s.key);
                  closeAllDropdowns();
                }}
              >
                <ListItemText primary={s.label} />
              </ListItemButton>
              {idx !== subjects.length - 1 && <Divider sx={dividerSx} />}
            </Box>
          ))}
        </List>
      </Popover>
    </>
  );
}