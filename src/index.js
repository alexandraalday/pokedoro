import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
global.jQuery = require('jquery');
require('bootstrap');


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

