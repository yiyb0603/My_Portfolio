import React, { CSSProperties, useMemo } from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import { StackEnums } from 'lib/enum/StackEnum';

const style = require('./StackItem.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface StackItemProps {
  progressName: string;
  title: string;
  progress: string;
  background: string;
  level: StackEnums;
  icon: JSX.Element;
}

const StackItem = ({
  progressName,
  title,
  progress,
  background,
  level,
  icon,
}: StackItemProps): JSX.Element => {
  const progressStyle: CSSProperties = useMemo(() => {
    return {
      width: progress,
      backgroundColor: background,
    };
  }, [background, progress]);

  const iconStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: 50,
      color: background,
    };
  }, [background]);

  return (
    <div className={cx('StackItem-Wrapper')}>
      <div className={cx('StackItem-Wrapper-Icon')} style={iconStyle}>
        {icon}
      </div>

      <div className={cx('StackItem-Wrapper-RightSection')}>
        <div className={cx('StackItem-Wrapper-RightSection-ProgressName')}>
          {progressName}
        </div>
        <div className={cx('StackItem-Wrapper-RightSection-Title')}>
          {title}
        </div>
        <div className={cx('StackItem-Wrapper-RightSection-ProgressWrapper')}>
          <div
            style={progressStyle}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default StackItem;
