import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import useLanguage from '../../hooks/useLanguage';

// Styled wrapper for the search box
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 6, // subtle angular edges
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  maxWidth: '280px', // wider than before
  height: '40px',    // a little more height
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
  display: 'flex',
  alignItems: 'center', // vertical centering
}));

// Search icon wrapper
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

// Styled input field
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  fontSize: '1rem', // slightly bigger text for better readability
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0), // more vertical padding for height
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '25ch', // wider width on medium screens
    },
  },
}));

// Main Search Component
export default function SearchBar({ onChange }) {
  let language = useLanguage();

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon fontSize="small" />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder={`${language.search}...`}
        onChange={onChange}
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  );
}
