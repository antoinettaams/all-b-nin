import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';  // <-- ajoute cet import
import './index.css';
import App from './App.jsx';
import React from 'react';
import ReactDOM from 'react-dom/client';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
