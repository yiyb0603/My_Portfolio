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
        <ul className ="NavBar">
            <li className ={pathname === "/" ? "NavBar-CurrentItem" : "NavBar-Item"} onClick ={() => history.push("/")}>home</li>
            <li className ={pathname === "/aboutme" ? "NavBar-CurrentItem" : "NavBar-Item"} onClick ={() => history.push("/aboutme")}>about me</li>
            <li className ={pathname === "/projects" ? "NavBar-CurrentItem" : "NavBar-Item"} onClick ={() => history.push("/projects")}>about my projects</li>
        </ul>
    );
}

export default withRouter(NavBar);