import React from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';

const style = require('./ProjectsCard.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface ProjectsCardProps {
  name: string;
  type: string[];
  stacks: string[];
  period: string;
  gallery: string[];
  introduction: string;
  thumbnail: string;
  feel: string;
  link: string;
  role: string;
  handleClick: () => void;
};

const ProjectsCard = ({ 
  name,
  introduction,
  type,
  stacks,
  period,
  gallery,
  feel,
  link,
  role,
  thumbnail,
  handleClick,
} : ProjectsCardProps) => {
  return (
    <div className={cx('ProjectsCard')} onClick ={handleClick}>
      <div className={cx('ProjectsCard-Types')}>{type.join(', ')}</div>
      <img
        className={cx('ProjectsCard-Thumbnail')}
        src ={thumbnail || gallery[0]}
        alt ='gallery'
      />
      
      <div className={cx('ProjectsCard-NamePeriod')}>
        <div className={cx('ProjectsCard-NamePeriod-Name')}>{name}</div>
        <div className={cx('ProjectsCard-NamePeriod-Period')}>{period}</div>
      </div>

      <div
        className={cx('ProjectsCard-Stacks')}
        title={stacks.join(', ')}
      >
        {stacks.join(', ')}
      </div>
      <div className={cx('ProjectsCard-Introduction')}>{introduction}</div>
    </div>
  );
}

export default ProjectsCard;