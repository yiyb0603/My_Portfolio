import React, { StrictMode, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import ProgressLoading from 'components/Common/ProgressLoading';
import App from 'components/App';

import './styles/global.scss';
import './styles/palette.scss';

const Root = (): JSX.Element => {
  return (
    <RecoilRoot>
      <Suspense fallback={ProgressLoading}>
        <BrowserRouter basename='/my_portfolio'>
          <StrictMode>
            <App />
          </StrictMode>
        </BrowserRouter>
      </Suspense>
    </RecoilRoot>
  );
};

export default Root;