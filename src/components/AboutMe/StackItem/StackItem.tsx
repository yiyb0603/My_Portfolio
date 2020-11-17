import React, { ReactNode } from "react";
import classNames from 'classnames';
import { ClassNamesFn } from "classnames/types";

const style = require("./StackItem.scss");
const cx: ClassNamesFn = classNames.bind(style);

interface StackItemProps {
  progressName: string;
  children?: ReactNode;
}

const StackItem = ({ progressName, children }: StackItemProps) => {
  return (
    <div className={cx('StackItem-Wrapper')}>
      <div className={cx('StackItem-Wrapper-Icon')}>
        {children && children}
      </div>

      <div className={cx('StackItem-Wrapper-ProgressWrapper')}>
        <div className={cx(`StackItem-Wrapper-ProgressWrapper-${progressName}Bar`)}></div>
      </div>
    </div>
  );
};

export default StackItem;
