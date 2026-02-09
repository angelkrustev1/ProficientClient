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
  ListItem,
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

  // Profile menu state + anchor
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  // dropdown state
  const [classAnchorEl, setClassAnchorEl] = useState(null);
  const [subjectAnchorEl, setSubjectAnchorEl] = useState(null);

  const classes = useMemo(() => Array.from({ length: 12 }, (_, i) => i + 1), []);

  // Static UI number -> internal value
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

  // Language-driven class labels (updates when language updates)
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

  // ---- FILTER UI OPENERS (do nothing off "/") ----
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

  // ---- state changes: only happen on "/" ----
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

  const popoverStyles = {
    width: 220,
    borderRadius: 0.5,
    backgroundColor: "base.mid",
    color: "base.light",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.3)",
    maxHeight: "none",
    overflow: "visible",
  };

  const listItemStyles = {
    paddingY: 0.5,
    paddingX: 4,
    "&:hover": {
      backgroundColor: "rgba(244, 255, 248, 0.08)",
      cursor: "pointer",
    },
    "& .MuiListItemText-primary": {
      whiteSpace: "nowrap",
    },
  };

  const dividerSx = { backgroundColor: "rgba(244,255,248,0.2)" };

  return (
    <>
      <Box>
        <AppBar position="static">
          <Toolbar sx={{ minHeight: 80, px: 3 }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              onClick={drawerOpenHandler}
            >
              <MenuIcon />
            </IconButton>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexGrow: 1,
              }}
            >
              <Button component={Link} to="/" variant="text">
                <Box
                  component="img"
                  src="/logo.png"
                  alt="Logo"
                  sx={{ height: 55 }}
                />
              </Button>

              <Box sx={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                <SearchBar />

                <Button variant="text" onClick={openClass}>
                  {language.class}
                </Button>

                <Button variant="text" onClick={openSubject}>
                  {language.subject}
                </Button>

                <Button variant="text" onClick={() => toggleType("exams")}>
                  {language.finals}
                </Button>

                <Button variant="text" onClick={() => toggleType("tests")}>
                  {language.tests}
                </Button>

                <IconButton color="inherit" onClick={menuOpenHander}>
                  <AccountCircle sx={{ fontSize: 32 }} />
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

      {/* CLASS DROPDOWN */}
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
                <ListItem
                  sx={listItemStyles}
                  onClick={() => {
                    toggleValue("class", value);
                    closeAllDropdowns();
                  }}
                >
                  <ListItemText primary={CLASS_LABELS[c]} />
                </ListItem>
                {idx !== classes.length - 1 && <Divider sx={dividerSx} />}
              </Box>
            );
          })}
        </List>
      </Popover>

      {/* SUBJECT DROPDOWN */}
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
              <ListItem
                sx={listItemStyles}
                onClick={() => {
                  toggleValue("subject", s.key);
                  closeAllDropdowns();
                }}
              >
                <ListItemText primary={s.label} />
              </ListItem>
              {idx !== subjects.length - 1 && <Divider sx={dividerSx} />}
            </Box>
          ))}
        </List>
      </Popover>
    </>
  );
}
