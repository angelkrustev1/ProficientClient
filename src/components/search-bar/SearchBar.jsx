import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import useLanguage from "../../hooks/useLanguage";

// Styled wrapper for the search box
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 4,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  border: `1px solid ${alpha(theme.palette.common.white, 0.12)}`,
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: "100%",
  minWidth: 0,
  maxWidth: "100%",
  height: 40,
  display: "flex",
  alignItems: "center",
  boxSizing: "border-box",
  [theme.breakpoints.up("sm")]: {
    maxWidth: 280,
  },
}));

// Search icon wrapper
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
  color: "inherit",
}));

// Styled input field
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  fontSize: "0.95rem",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1.5, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(5)})`,
    width: "100%",
    minWidth: 0,
    boxSizing: "border-box",
    transition: theme.transitions.create(["width", "background-color"], {
      duration: theme.transitions.duration.shorter,
    }),
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },
}));

// Main Search Component
export default function SearchBar({ onChange }) {
  const language = useLanguage();

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon fontSize="small" />
      </SearchIconWrapper>

      <StyledInputBase
        placeholder={`${language.search}...`}
        onChange={onChange}
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
}