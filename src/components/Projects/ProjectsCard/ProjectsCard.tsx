import React from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

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
  handleClick: () => void;
};

const ProjectsCard = ({ 
  name,
  introduction,
  type,
  stacks,
  period,
  gallery,
  thumbnail,
  handleClick,
} : ProjectsCardProps) => {
  return (
    <div className={cx('ProjectsCard')} onClick ={handleClick}>
      <div className={cx('ProjectsCard-Types')}>{type.join(', ')}</div>
      <LazyLoadImage
        className={cx('ProjectsCard-Thumbnail')}
        src ={thumbnail || gallery[0]}
        alt ='gallery'
        effect='blur'
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