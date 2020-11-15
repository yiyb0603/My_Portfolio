import React from 'react';
import './NavBar.scss';
import { withRouter, useLocation, useHistory } from 'react-router-dom';
import { History } from "history";

const NavBar = () => {
    const history: History<History.PoorMansUnknown> = useHistory();
    const { pathname } = useLocation();
    
    return (
        <div className ="NavBar">
            <ul className ="NavBar-Contents">
                <li className ={pathname === "/" ? "NavBar-Contents-CurrentItem" : "NavBar-Contents-Item"} onClick ={() => history.push("/")}>home</li>
                <li className ={pathname === "/aboutme" ? "NavBar-Contents-CurrentItem" : "NavBar-Contents-Item"} onClick ={() => history.push("/aboutme")}>about me</li>
                <li className ={pathname === "/projects" ? "NavBar-Contents-CurrentItem" : "NavBar-Contents-Item"} onClick ={() => history.push("/projects")}>my projects</li>
            </ul>
        </div>
    );
}

export default withRouter(NavBar);