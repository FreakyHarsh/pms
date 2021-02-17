import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import { StudentReducer } from './store/reducers/StudentReducer/student.reducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

(window as any).baseURL = process.env.REACT_APP_BASE_URL;

const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// const rootReducer = combineReducers({
//   nameState: nameReducer,
//   bmksState: bookmarksReducer,
// });
const store = createStore(StudentReducer, composeEnhancers(applyMiddleware(thunk)));
console.log(store);
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
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CssBaseline />
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
