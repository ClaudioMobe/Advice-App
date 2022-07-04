import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';
import {ConsejoProvider} from './contexts/ContextoConsejo';

WebFont.load({
  google: {
    families: ['Manrope:700,800', 'sans serif']
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConsejoProvider>
      <App />
    </ConsejoProvider>
  </React.StrictMode>
);