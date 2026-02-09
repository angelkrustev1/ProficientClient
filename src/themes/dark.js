import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',

    base: {
      dark: '#0F1214',   // app background (neutral, calm)
      light: '#161A1F',  // surfaces (slightly lifted)
      hard: '#E5E7EB',   // primary text (soft white)
      mid: '#2C3238',    // borders / outlines
      soft: '#9AA1A8',   // secondary text
      accent: '#8B4652', // muted wine accent (controlled)
    },

    // Identity color — present but never loud
    primary: {
      main: '#5F7F78',        // desaturated teal-green (quiet)
      contrastText: '#0F1214',
    },

    secondary: {
      main: '#8B4652',
      contrastText: '#E5E7EB',
    },

    background: {
      default: '#0F1214',
      paper: '#161A1F',
    },

    text: {
      primary: '#E5E7EB',
      secondary: '#B0B6BC',
      disabled: 'rgba(229, 231, 235, 0.38)',
    },

    divider: 'rgba(176, 182, 188, 0.16)',

    action: {
      hover: 'rgba(95, 127, 120, 0.10)',
      selected: 'rgba(95, 127, 120, 0.18)',
      disabled: 'rgba(229, 231, 235, 0.28)',
      disabledBackground: 'rgba(176, 182, 188, 0.12)',
    },
  },

  typography: {
    fontFamily: `'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: '#E5E7EB',
          '&.Mui-selected': {
            backgroundColor: 'rgba(95, 127, 120, 0.18)',
          },
          '&:hover': {
            backgroundColor: 'rgba(95, 127, 120, 0.10)',
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        text: {
          color: '#E5E7EB',
          letterSpacing: '0.5px',
          fontWeight: 500,
          '&:hover': {
            backgroundColor: 'rgba(95, 127, 120, 0.12)',
          },
        },
      },
    },
  },
});

export default theme;
