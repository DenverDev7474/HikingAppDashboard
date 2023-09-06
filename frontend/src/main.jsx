import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@mui/material/styles';
import theme from './assets/theme/theme.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);