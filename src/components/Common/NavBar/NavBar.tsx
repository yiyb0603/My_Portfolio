import React, { useCallback } from 'react';
import classNames from 'classnames';
import { useLocation, useHistory } from 'react-router-dom';
import { History } from 'history';
import Headroom from 'react-headroom';
import { IRoutesTypes, routes } from 'util/Route';
import { ClassNamesFn } from 'classnames/types';

const style = require('./NavBar.scss');
const cx: ClassNamesFn = classNames.bind(style);

const NavBar = (): JSX.Element => {
  const history: History<History.PoorMansUnknown> = useHistory();
  const { pathname } = useLocation();

  const onRouteMove = useCallback((path: string): void => {
    if (path !== pathname) {
      history.push(path);
    }
  }, [history, pathname]);

  return (
    <Headroom>
      <div className={cx('NavBar')}>
        <ul className={cx('NavBar-Contents')}>
          {
            routes.map((route: IRoutesTypes, index: number) => {
              return (
                <li
                  key={index}
                  className ={pathname === route.pathname ? 'NavBar-Contents-CurrentItem' : 'NavBar-Contents-Item'} 
                  onClick ={() => onRouteMove(route.pathname)}
                >
                  {route.name}
                </li>
              );
            })
          }
        </ul>
      </div>
    </Headroom>
  );
}

export default NavBar;