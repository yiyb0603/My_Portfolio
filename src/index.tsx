import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './styles/AllStyles.scss';

ReactDOM.render(
  <BrowserRouter basename="/my_portfolio">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();