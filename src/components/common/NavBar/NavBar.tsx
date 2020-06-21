import React from 'react';
import './NavBar.scss';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { History, LocationState } from "history";

interface MainProps extends RouteComponentProps {
    history: History<LocationState>;
}

const NavBar = ({ history } : MainProps) => {
    return (
        <ul className ="NavBar">
            <li onClick ={() => history.push("/")}>home</li>
            <li onClick ={() => history.push("/projects")}>about me</li>
            <li onClick ={() => history.push("/projects")}>about my projects</li>
        </ul>
    );
}

export default withRouter(NavBar);