import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#39A0ED',
      contrastText: '#FFF',
    },
    secondary: {
      main: '#39ED93',
      contrastText: '#FFF',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          fontFamily: `"Roboto", "Playfair Display", sans-serif`,
          scrollBehavior: 'smooth',
        },
      },
    },
  },
});
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
