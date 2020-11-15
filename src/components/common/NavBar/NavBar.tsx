import React from 'react';
import './NavBar.scss';
import { RouteComponentProps, withRouter, useLocation } from 'react-router-dom';
import { History, LocationState } from "history";

interface MainProps extends RouteComponentProps {
    history: History<LocationState>;
}

const NavBar = ({ history } : MainProps) => {
    const { pathname } = useLocation();
    
    return (
        <div className ="NavBar">
            <ul className ="NavBar-Contents">
                <li className ={pathname === "/" ? "NavBar-Contents-CurrentItem" : "NavBar-Contents-Item"} onClick ={() => history.push("/")}>home</li>
                <li className ={pathname === "/aboutme" ? "NavBar-Contents-CurrentItem" : "NavBar-Contents-Item"} onClick ={() => history.push("/aboutme")}>about me</li>
                <li className ={pathname === "/projects" ? "NavBar-Contents-CurrentItem" : "NavBar-Contents-Item"} onClick ={() => history.push("/projects")}>about my projects</li>
            </ul>
        </div>
    );
}

export default withRouter(NavBar);