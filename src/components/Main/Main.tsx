import React from 'react';
import project from 'assets/images/project.png';
import aboutme from 'assets/images/aboutme.png';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { History, LocationState } from "history";
import './Main.scss';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface MainProps extends RouteComponentProps {
    history: History<LocationState>;
}

const Main = ({ history } : MainProps) => {
    return (
        <div className ="Main">
            <div className ="Main-Left">
                <div className ="Main-Left-Aboutme">
                    <h1>ABOUT ME</h1>
                    <img src ={aboutme} alt ="about me" />
                    <button onClick ={() => history.push("/aboutme")}>
                        <span>Lookup About Me</span> 
                        <AiOutlineArrowRight />
                    </button>
                </div>
            </div>

            <div className ="Main-Right">
                <div className ="Main-Right-Project">
                    <h1>ABOUT MY PROJECTS</h1>
                    <img src ={project} alt ="project" />
                    <button onClick ={() => history.push("/projects")}>
                        <div>Lookup My Projects</div>
                        <AiOutlineArrowRight className ="Main-Right-Project-Arrow" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Main);