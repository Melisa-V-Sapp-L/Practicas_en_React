import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ToApi } from "./ToApi";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ToApi />
  </React.StrictMode>
);


