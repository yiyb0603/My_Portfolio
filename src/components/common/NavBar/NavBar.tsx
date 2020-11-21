import React from 'react';
import './NavBar.scss';
import { withRouter, useLocation, useHistory } from 'react-router-dom';
import { History } from "history";
import { IRoutesTypes, routes } from 'util/Route';

const NavBar = () => {
  const history: History<History.PoorMansUnknown> = useHistory();
  const { pathname } = useLocation();
  
  return (
    <div className ="NavBar">
      <ul className ="NavBar-Contents">
        {
          routes.map((route: IRoutesTypes, index: number) => {
            return (
              <li
                key={index}
                className ={pathname === route.pathname ? "NavBar-Contents-CurrentItem" : "NavBar-Contents-Item"} 
                onClick ={() => history.push(route.pathname)}
              >
                {route.name}
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default withRouter(NavBar);