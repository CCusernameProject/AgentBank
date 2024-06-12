import * as React from "react";
import { createRoot } from "react-dom/client";
import Router from './Router.jsx'
import { Provider } from 'react-redux';
import store from './libs/store.js';
import './assets/styles/styles.css'

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router />
  </Provider>
);