import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import { FaHtml5, FaCss3Alt, FaJava, FaReact, FaSass, FaVuejs } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { GiStack, GiTeslaCoil } from 'react-icons/gi';
import { GrNode } from 'react-icons/gr';
import StackItem from '../StackItem';
import NextLogo from 'assets/images/Next.png';
import ReduxLogo from 'assets/images/redux.svg';
import NestLogo from 'assets/images/nest.jpg';
import CLogo from 'assets/images/CLogo.svg';

const style = require("./Stacks.scss");
const cx: ClassNamesFn = classNames.bind(style);

const Stacks = (): JSX.Element => {
  const TS_LOGO: string = "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg";
  const MOBX_LOGO: string = "https://miro.medium.com/max/400/1*nvHO6KuxX5B6FVXZ_hqTZw.png";
  const TYPE_ORM_LOGO: string = "https://avatars2.githubusercontent.com/u/20165699?s=400&v=4";

  const imageStyle: CSSProperties = {
    width: 55,
    height: 55,
    borderRadius: 5,
    objectFit: 'cover',
  };

  return (
    <div className ="Stacks">
      <div className="Stacks-Top">
        <GiStack className="Stacks-Top-Icon" />
        <h2 className="Stacks-Top-Title">My Stack Trace</h2>
      </div>

      <div className ="Stacks-Stack">
        <StackItem progressName="C">
          <img src={CLogo} style ={imageStyle} alt ="C language" />
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

        <StackItem progressName="Recoil">
          <GiTeslaCoil className={cx('StackItem-Wrapper-Icon-Recoil')} />
        </StackItem>

        <StackItem progressName="Redux">
          <img src={ReduxLogo} alt ="redux" style={imageStyle} />
        </StackItem>

        <StackItem progressName="Scss">
          <FaSass className={cx('StackItem-Wrapper-Icon-Scss')} />
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

        <StackItem progressName="Nest">
          <img src={NestLogo} alt ="nest" style={imageStyle} />
        </StackItem>
      </div>
    </div>
  );
}

export default Stacks;