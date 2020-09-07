import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Import jQuery
import 'jquery/dist/jquery.min.js';
// Import popper.js
import 'popper.js/dist/popper.js'
// Import normalize.css
import 'normalize.css'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);