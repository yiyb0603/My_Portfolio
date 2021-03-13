import React from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';

const style = require('./SectionTitle.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface SectionTitleProps {
  name: string;
  icon: JSX.Element;
}

const SectionTitle = ({ name, icon }: SectionTitleProps): JSX.Element => {
  return (
    <div className={cx('SectionTitle')}>
      <div className={cx('SectionTitle-Icon')}>
        {icon}
      </div>
      <div className={cx('SectionTitle-Title')}>{name}</div>
    </div>
  );
};

export default SectionTitle;
