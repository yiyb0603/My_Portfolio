import React from 'react';
import { FaHtml5, FaCss3Alt, FaJava, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import "./AboutMe.scss";

const AboutMe = () => {
    return (
        <div className ="AboutMe">
            <div className ="AboutMe-Stack">
                <h2>My Stack Trace</h2>
                <FaHtml5 />
            </div>
        </div>
    );
}

export default AboutMe;