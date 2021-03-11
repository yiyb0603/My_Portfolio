import React from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';

const style = require('./PageTitle.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface PageTitleProps {
  title: string;
  subTitle: string;
}

const PageTitle = ({ title, subTitle }: PageTitleProps): JSX.Element => {
  return (
    <div className={cx('PageTitle')}>
      <div className={cx('PageTitle-Title')}>{title}</div>
      <div className={cx('PageTitle-SubTitle')}>{subTitle}</div>
    </div>
  );
};

export default PageTitle;
