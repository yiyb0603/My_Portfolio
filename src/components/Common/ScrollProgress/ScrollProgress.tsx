import React, { useState, useCallback, useEffect, useRef, memo, MouseEvent } from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';

const style = require('./ScrollProgress.scss');
const cx: ClassNamesFn = classNames.bind(style);

const ScrollProgress = memo((): JSX.Element => {
  const [width, setWidth] = useState<number>(0);
  const progressRef = useRef<HTMLDivElement | null>(null);

  const handleProgressMove = useCallback((e: MouseEvent<HTMLDivElement>): void => {
    if (progressRef.current !== null) {
      const { scrollWidth } = progressRef.current;
      const { clientX } = e;

      const selectedPercent: number = (clientX / scrollWidth) * 100;
      setWidth(selectedPercent);
      
      const { innerHeight } = window;
      const { scrollHeight } = document.body;

      const moveScrollPercent: number = ((scrollHeight * selectedPercent) / 100) - innerHeight;

      window.scrollTo({
        top: moveScrollPercent,
        behavior: 'smooth',
      })
    }
  }, []);

  const handleScroll = useCallback((): void => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    const { scrollTop } = document.documentElement;
    
    const scrollPosition: number = Math.round(scrollTop + innerHeight);
    const currentPercent: number = (scrollPosition / scrollHeight) * 100;

    setWidth(currentPercent);
  }, []);
  
  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    }
  }, [handleScroll]);

  return (
    <div className={cx('ScrollProgress')} ref={progressRef} onClick={handleProgressMove}>
      <div className={cx('ScrollProgress-Progress')} style={{ width: width + '%', }} ></div>
    </div>
  );
});

export default ScrollProgress;
