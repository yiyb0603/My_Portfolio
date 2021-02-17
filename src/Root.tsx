import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './styles/AllStyles.scss';

const Root = (): JSX.Element => {
  return (
    <BrowserRouter basename="/my_portfolio">
      <App />
    </BrowserRouter>
  );
};

export default Root;