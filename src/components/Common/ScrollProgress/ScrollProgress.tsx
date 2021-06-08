import React, { memo } from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import useScrollProgress from 'hooks/scroll/useScrollProgress';

const style = require('./ScrollProgress.scss');
const cx: ClassNamesFn = classNames.bind(style);

const ScrollProgress = (): JSX.Element => {
  const { progressRef, handleProgressMove, width } = useScrollProgress();

  return (
    <div
      className={cx('ScrollProgress')}
      ref={progressRef}
      onClick={handleProgressMove}
    >
      <div
        className={cx('ScrollProgress-Progress')}
        style={{ width: width + '%' }}
      ></div>
    </div>
  );
};

export default memo(ScrollProgress);