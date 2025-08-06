import React from 'react';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box
} from '@mui/material';
import DiceBearAvatarCreator from '../components/DiceBearAvatarCreator';

// Create a vibrant theme for the Avataaars creator
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#4CAF50',
      light: '#81C784',
      dark: '#388E3C',
    },
    secondary: {
      main: '#FF9800',
      light: '#FFB74D',
      dark: '#F57C00',
    },
    success: {
      main: '#2196F3',
    },
    error: {
      main: '#E91E63',
    },
    info: {
      main: '#9C27B0',
    },
    background: {
      default: '#F3E5F5',
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: '"Fredoka One", "Comic Sans MS", cursive',
    h1: {
      fontFamily: '"Fredoka One", "Comic Sans MS", cursive',
    },
    h2: {
      fontFamily: '"Fredoka One", "Comic Sans MS", cursive',
    },
    h3: {
      fontFamily: '"Fredoka One", "Comic Sans MS", cursive',
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 12,
          fontWeight: 'bold',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  },
});

const AvataaarsCreatorDemo = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
          backgroundAttachment: 'fixed'
        }}
      >
        <DiceBearAvatarCreator />
      </Box>
    </ThemeProvider>
  );
};

export default AvataaarsCreatorDemo;
