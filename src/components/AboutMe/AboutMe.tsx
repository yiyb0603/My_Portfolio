import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import { FaHtml5, FaCss3Alt, FaJava, FaReact, FaSass, FaVuejs } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { GrNode } from 'react-icons/gr';
import StackItem from './StackItem';
import NextLogo from 'assets/images/Next.png';

const style = require("./AboutMe.scss");
const cx: ClassNamesFn = classNames.bind(style);

const AboutMe = () => {
    const C_LOGO: string = "https://vo.la/7hyjC";
    const TS_LOGO: string = "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg";
    const MOBX_LOGO: string = "https://miro.medium.com/max/400/1*nvHO6KuxX5B6FVXZ_hqTZw.png";
    const TYPE_ORM_LOGO: string = "https://avatars2.githubusercontent.com/u/20165699?s=400&v=4";

    const imageStyle: CSSProperties = {
        width: 50,
        height: 50,
        borderRadius: 5,
        objectFit: 'cover',
    };

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

                <StackItem progressName="MobX">
                    <img src ={MOBX_LOGO} alt ="mobx" style={imageStyle} />
                </StackItem>

                <StackItem progressName="Sass">
                    <FaSass className={cx('StackItem-Wrapper-Icon-Sass')} />
                </StackItem>

                <StackItem progressName="Vue">
                    <FaVuejs className={cx('StackItem-Wrapper-Icon-Vue')} />
                </StackItem>

                <StackItem progressName="Next">
                    <img src={NextLogo} alt ="nextjs" style ={imageStyle} />
                </StackItem>

                <StackItem progressName="Express">
                    <GrNode className={cx('StackItem-Wrapper-Icon-Express')} />
                </StackItem>

                <StackItem progressName="TypeORM">
                    <img src ={TYPE_ORM_LOGO} alt ="typeorm" style ={imageStyle} />
                </StackItem>
            </div>
        </div>
    );
}

export default AboutMe;