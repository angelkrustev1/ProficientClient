import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',

    base: {
      dark: '#000F08',
      mid: '#1C3738',
      soft: '#8BAAAD',
      light: '#F4FFF8',
      accent: '#1C3738',
    },

    primary: {
      main: '#1C3738',
      contrastText: '#F4FFF8',
    },

    secondary: {
      main: '#8BAAAD',
      contrastText: '#000F08',
    },

    background: {
      default: '#F4FFF8',
      paper: '#FFFFFF',
    },

    text: {
      primary: '#000F08',
      secondary: '#4D4847',
      disabled: 'rgba(0, 15, 8, 0.38)',
    },

    divider: 'rgba(28, 55, 56, 0.18)',

    action: {
      hover: 'rgba(28, 55, 56, 0.08)',
      selected: 'rgba(28, 55, 56, 0.16)',
      disabled: 'rgba(0, 15, 8, 0.38)',
      disabledBackground: 'rgba(28, 55, 56, 0.12)',
    },
  },

  typography: {
    fontFamily: `'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
  },

  shape: {
    borderRadius: 12, // slightly rounder corners
  },

  components: {
    MuiButton: {
      styleOverrides: {
        text: {
          backgroundColor: 'transparent',     // transparent background
          color: '#FFFFFF',                    // white text
          textDecoration: 'none',              // remove underline
          letterSpacing: '0.5px',              // a bit more space between letters
          padding: '10px 20px',                // slightly more padding
          borderRadius: 6,                     // slightly rounder edges
          fontWeight: 500,                     // better visual weight
          fontSize: '0.95rem',                    // balanced size
          '&:hover': {
            backgroundColor: 'rgba(28, 55, 56, 0.08)', // hover effect
          },
        },
      },
    },
  },
});

export default theme;