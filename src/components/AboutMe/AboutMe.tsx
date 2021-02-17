import React from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import Stacks from './Stacks';
import HomeImage from 'assets/images/Home.svg';
import FadeIn from 'react-fade-in';
import Contact from './Contact';

const style = require("./AboutMe.scss");
const cx: ClassNamesFn = classNames.bind(style);

const AboutMe = (): JSX.Element => {
  return (
    <FadeIn>
      <div className ={cx("AboutMe")}>
        <div className={cx('AboutMe-Wrapper')}>
          <div className={cx('AboutMe-Wrapper-ContentsWrapper')}>
            <div className={cx('AboutMe-Wrapper-ContentsWrapper-Contents')}>
              <div>First Or Default</div>
            </div>

            <div className={cx('AboutMe-Wrapper-SubTitle')}>
              <div>먼저 도전을 시도해보고</div>
              <div>먼저 바탕이 되어보고</div>
              <div>먼저임을 중요시 여깁니다.</div>
            </div>

            <div className={cx('AboutMe-Wrapper-Introduction')}>
              안녕하세요 깨끗한 세상을 지향하는<br />개발자 권용빈 입니다.
            </div>
          </div>

          <img src={HomeImage} alt ="homeimage" className={cx('AboutMe-Wrapper-Image')} />
        </div>
      </div>
      
      <Contact />
      <Stacks />
    </FadeIn>
  );
}

export default AboutMe;