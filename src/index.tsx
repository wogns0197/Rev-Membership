import './index.css';

import { BrowserRouter, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import ManagePage from './pages/ManagePage';
import PointPage from './pages/PointPage';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "styled-components";
import reportWebVitals from './reportWebVitals';
import theme from './style/theme';

document.title = "Rev Membership";
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Route path="/" exact component={MainPage} />
        <Route path="/PointPage" exact component={PointPage} />
        <Route path="/ManagePage" exact component={ManagePage} />
      </BrowserRouter>      
    </ThemeProvider>    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
