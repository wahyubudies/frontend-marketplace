import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { store } from "./store";

import "./main.css";
import '@splidejs/react-splide/css';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
