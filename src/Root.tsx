import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import App from './components/App';
import './styles/AllStyles.scss';

const Root = (): JSX.Element => {
  return (
    <RecoilRoot>
      <BrowserRouter basename="/my_portfolio">
        <App />
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default Root;