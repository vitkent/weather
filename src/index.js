import React from 'react';
import ReactDOM from 'react-dom/client';
import ThemeProvider from './providers/ThemeProvider';
import App from './App';
import './assets/styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
