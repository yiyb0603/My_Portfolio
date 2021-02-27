import React, { useState, useCallback, useEffect, useRef, memo } from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';

const style = require('./ScrollProgress.scss');
const cx: ClassNamesFn = classNames.bind(style);

const ScrollProgress = memo((): JSX.Element => {
  const [width, setWidth] = useState<number>(0);
  const progressRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = useCallback((): void => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop === 0) {
      setWidth(0);
      return;
    }

    const windowHeight = scrollHeight - clientHeight;
    const currentPercent: number = (scrollTop / windowHeight);

    setWidth(currentPercent);
  }, []);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    }
  }, [handleScroll]);

  return (
    <div className={cx('ScrollProgress')} ref={progressRef}>
      <div className={cx('ScrollProgress-Progress')} style={{ transform: `scale(${width}, 1)` }} ></div>
    </div>
  );
});

export default ScrollProgress;
