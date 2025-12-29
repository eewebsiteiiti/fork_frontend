'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000249',
      light: '#2a2b6e',
      dark: '#000133',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#B2103F',
      light: '#e91e63',
      dark: '#880e4f',
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Caudex", serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Caudex", serif',
      fontWeight: 600,
    },
    h3: {
      fontFamily: '"Caudex", serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"Caudex", serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

export default theme;
