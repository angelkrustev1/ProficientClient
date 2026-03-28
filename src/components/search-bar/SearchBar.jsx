import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  Backdrop,
  Box,
  Fade,
  IconButton,
  InputBase,
  Paper,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import useLanguage from "../../hooks/useLanguage";

// Desktop search wrapper
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 10,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  border: `1px solid ${alpha(theme.palette.common.white, 0.14)}`,
  backdropFilter: "blur(8px)",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.22),
    borderColor: alpha(theme.palette.common.white, 0.22),
  },
  width: "100%",
  minWidth: 0,
  maxWidth: "100%",
  height: 42,
  display: "flex",
  alignItems: "center",
  boxSizing: "border-box",
  overflow: "hidden",
  transition: theme.transitions.create(["background-color", "border-color"], {
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up("sm")]: {
    maxWidth: 300,
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1.5),
  height: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: alpha(theme.palette.common.white, 0.9),
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  fontSize: "0.95rem",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1.1, 1.5, 1.1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(5)})`,
    width: "100%",
    minWidth: 0,
    boxSizing: "border-box",
  },
}));

// Mobile button shown where the bar normally is
const MobileSearchButton = styled(IconButton)(({ theme }) => ({
  width: "100%",
  maxWidth: 300,
  height: 42,
  borderRadius: 10,
  justifyContent: "flex-start",
  paddingInline: theme.spacing(1.5),
  color: alpha(theme.palette.common.white, 0.95),
  backgroundColor: alpha(theme.palette.common.white, 0.12),
  border: `1px solid ${alpha(theme.palette.common.white, 0.14)}`,
  backdropFilter: "blur(8px)",
  transition: theme.transitions.create(
    ["background-color", "transform", "border-color"],
    {
      duration: theme.transitions.duration.shorter,
    }
  ),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.2),
    borderColor: alpha(theme.palette.common.white, 0.22),
  },
  "&:active": {
    transform: "scale(0.985)",
  },
}));

const MobileSearchHint = styled("span")(({ theme }) => ({
  marginLeft: theme.spacing(1),
  fontSize: "0.95rem",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  opacity: 0.9,
}));

const FloatingSearchPaper = styled(Paper)(({ theme }) => ({
  position: "fixed",
  top: theme.spacing(1.5),
  left: theme.spacing(1.5),
  right: theme.spacing(1.5),
  zIndex: theme.zIndex.drawer + 2,
  display: "flex",
  alignItems: "center",
  height: 54,
  borderRadius: 14,
  paddingInline: theme.spacing(1),
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[10],
  [theme.breakpoints.up("sm")]: {
    left: "50%",
    right: "auto",
    transform: "translateX(-50%)",
    width: "min(92vw, 560px)",
  },
}));

const FloatingInput = styled(InputBase)(({ theme }) => ({
  flex: 1,
  color: theme.palette.text.primary,
  fontSize: "1rem",
  marginLeft: theme.spacing(1),
  "& .MuiInputBase-input": {
    padding: theme.spacing(1.2, 1, 1.2, 0),
  },
}));

export default function SearchBar({ onChange, value = "" }) {
  const language = useLanguage();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [open, setOpen] = React.useState(false);
  const inputRef = React.useRef(null);

  const closeSearch = React.useCallback(() => {
    setOpen(false);
  }, []);

  React.useEffect(() => {
    if (!isMobile) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeSearch();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobile, closeSearch]);

  React.useEffect(() => {
    if (open && inputRef.current) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 120);

      return () => clearTimeout(timer);
    }
  }, [open]);

  if (!isMobile) {
    return (
      <Search>
        <SearchIconWrapper>
          <SearchIcon fontSize="small" />
        </SearchIconWrapper>

        <StyledInputBase
          placeholder={`${language.search}...`}
          onChange={onChange}
          value={value}
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    );
  }

  return (
    <>
      <MobileSearchButton
        onClick={() => setOpen(true)}
        aria-label="open search"
      >
        <SearchIcon fontSize="small" />
        <MobileSearchHint>{language.search}...</MobileSearchHint>
      </MobileSearchButton>

      <Backdrop
        open={open}
        onClick={closeSearch}
        sx={{
          zIndex: theme.zIndex.drawer + 1,
          backgroundColor: "rgba(0, 0, 0, 0.45)",
          backdropFilter: "blur(3px)",
        }}
      />

      <Fade in={open}>
        <FloatingSearchPaper
          elevation={0}
          onClick={(e) => e.stopPropagation()}
        >
          <SearchIcon
            fontSize="small"
            sx={{ color: "text.secondary", ml: 1 }}
          />

          <FloatingInput
            inputRef={inputRef}
            placeholder={`${language.search}...`}
            onChange={onChange}
            value={value}
            inputProps={{ "aria-label": "search" }}
          />

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton onClick={closeSearch} aria-label="close search">
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
        </FloatingSearchPaper>
      </Fade>
    </>
  );
}