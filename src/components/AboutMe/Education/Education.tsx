import React from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import SectionTitle from '../SectionTitle';
import { GiGraduateCap } from 'react-icons/gi';

const style = require('./Education.scss');
const cx: ClassNamesFn = classNames.bind(style);

const Education = (): JSX.Element => {
  return (
    <div className={cx('Education')}>
      <SectionTitle name='학력' icon={<GiGraduateCap />} />

      <div className={cx('Education-Contents')}>
        <div>2019년 ~ : 대구소프트웨어고등학교 재학중</div>
      </div>
    </div>
  );
};

export default Education;
