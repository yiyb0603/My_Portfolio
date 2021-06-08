import React, { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import App from './components/App';
import './styles/global.scss';

const Root = (): JSX.Element => {
  return (
    <RecoilRoot>
      <BrowserRouter basename='/my_portfolio'>
        <StrictMode>
          <App />
        </StrictMode>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default Root;