import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProviderComponent } from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProviderComponent>
      <App />
    </ThemeProviderComponent>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
