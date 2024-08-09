// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Aquí se incluye el CSS global de Tailwind
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
