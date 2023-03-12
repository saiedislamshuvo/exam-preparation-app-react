import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './store';
import App from './App';

import { StoreProvider } from 'easy-peasy';
import { BrowserRouter } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/css/style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreProvider>,
  </React.StrictMode>,
)
