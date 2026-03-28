import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',

    base: {
      dark: '#0B0A0F',   // app background
      light: '#181520',  // elevated surface
      hard: '#F3EFFA',   // strong text
      mid: '#3A3348',    // border / structure
      soft: '#211C2B',   // card surface (important for your MaterialCard)
      accent: '#9A7CCF', // accent violet
    },

    primary: {
      main: '#9A7CCF',
      contrastText: '#F7F4FC',
    },

    secondary: {
      main: '#7E6AA3',
      contrastText: '#F3EFFA',
    },

    background: {
      default: '#0B0A0F',
      paper: '#181520',
    },

    text: {
      primary: '#F3EFFA',
      secondary: '#B9B1C9',
      disabled: 'rgba(243, 239, 250, 0.36)',
    },

    divider: 'rgba(185, 177, 201, 0.16)',

    action: {
      hover: 'rgba(154, 124, 207, 0.10)',
      selected: 'rgba(154, 124, 207, 0.16)',
      disabled: 'rgba(243, 239, 250, 0.26)',
      disabledBackground: 'rgba(185, 177, 201, 0.08)',
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
          color: '#F3EFFA',
          '&.Mui-selected': {
            backgroundColor: 'rgba(154, 124, 207, 0.16)',
          },
          '&:hover': {
            backgroundColor: 'rgba(154, 124, 207, 0.10)',
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        text: {
          color: '#F3EFFA',
          letterSpacing: '0.5px',
          fontWeight: 500,
          '&:hover': {
            backgroundColor: 'rgba(154, 124, 207, 0.10)',
          },
        },
      },
    },
  },
});

export default theme;