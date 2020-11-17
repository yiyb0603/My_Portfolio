import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import { FaHtml5, FaCss3Alt, FaJava, FaReact, FaSass } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import StackItem from './StackItem';

const style = require("./AboutMe.scss");
const cx: ClassNamesFn = classNames.bind(style);

const AboutMe = () => {
    const C_LOGO: string = "https://vo.la/7hyjC";
    const TS_LOGO: string = "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg";

    const imageStyle: CSSProperties = {
        width: 50,
        height: 50,
    }

    return (
        <div className ="AboutMe">
            <h2>My Stack Trace</h2>
            <div className ="AboutMe-Stack">
                <StackItem progressName="C">
                    <img src={C_LOGO} style ={imageStyle} alt ="C language" />
                </StackItem>

                <StackItem progressName="Java">
                    <FaJava className={cx('StackItem-Wrapper-Icon-Java')} />
                </StackItem>

                <StackItem progressName="HTML">
                    <FaHtml5 className={cx('StackItem-Wrapper-Icon-HTML')} />
                    <FaCss3Alt className={cx('StackItem-Wrapper-Icon-CSS')} />
                </StackItem>

                <StackItem progressName="JavaScript">
                    <IoLogoJavascript className={cx('StackItem-Wrapper-Icon-JavaScript')} />
                </StackItem>

                <StackItem progressName="TypeScript">
                    <img src={TS_LOGO} alt ="typescript" style={imageStyle} />
                </StackItem>

                <StackItem progressName="React">
                    <FaReact className={cx('StackItem-Wrapper-Icon-React')} />
                </StackItem>

                <StackItem progressName="Sass">
                    <FaSass className={cx('StackItem-Wrapper-Icon-Sass')} />
                </StackItem>
            </div>
        </div>
    );
}

export default AboutMe;