import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/index.jsx';
import ScrollToTop from './helpers/ScrollToTop/ScrollToTop.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ScrollToTop />
    <AppRouter />
  </BrowserRouter>
);
