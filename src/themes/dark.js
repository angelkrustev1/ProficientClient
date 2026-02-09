import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',

    base: {
      dark: '#0E0C12',   // app background (near-black, neutral-violet)
      light: '#14111B',  // surfaces (subtle lift, very low chroma)
      hard: '#D6D1E0',   // primary text (tamed, no glare)
      mid: '#26212F',    // borders / outlines (quiet)
      soft: '#9D97AA',   // secondary text (calm, readable)
      accent: '#6F5A8C', // muted purple accent (smoky)
    },

    primary: {
      main: '#62537E',        // smoky violet (identity, very restrained)
      contrastText: '#0E0C12',
    },

    secondary: {
      main: '#6F5A8C',
      contrastText: '#D6D1E0',
    },

    background: {
      default: '#0E0C12',
      paper: '#14111B',
    },

    text: {
      primary: '#D6D1E0',
      secondary: '#ABA6B7',
      disabled: 'rgba(214, 209, 224, 0.34)',
    },

    divider: 'rgba(171, 166, 183, 0.13)',

    action: {
      hover: 'rgba(98, 83, 126, 0.08)',
      selected: 'rgba(98, 83, 126, 0.13)',
      disabled: 'rgba(214, 209, 224, 0.24)',
      disabledBackground: 'rgba(171, 166, 183, 0.09)',
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
          color: '#D6D1E0',
          '&.Mui-selected': {
            backgroundColor: 'rgba(98, 83, 126, 0.13)',
          },
          '&:hover': {
            backgroundColor: 'rgba(98, 83, 126, 0.08)',
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        text: {
          color: '#D6D1E0',
          letterSpacing: '0.5px',
          fontWeight: 500,
          '&:hover': {
            backgroundColor: 'rgba(98, 83, 126, 0.10)',
          },
        },
      },
    },
  },
});

export default theme;
