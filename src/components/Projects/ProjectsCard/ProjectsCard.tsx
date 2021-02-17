import React from 'react';
import './ProjectsCard.scss';

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
    <div className ='ProjectsCard' onClick ={handleClick}>
      <div className ='ProjectsCard-Types'>{type.join(', ')}</div>
      <img className ='ProjectsCard-Thumbnail' src ={thumbnail || gallery[0]} alt ='gallery' />
      
      <div className ='ProjectsCard-NamePeriod'>
        <div className ='ProjectsCard-NamePeriod-Name'>{name}</div>
        <div className ='ProjectsCard-NamePeriod-Period'>{period}</div>
      </div>

      <div className ='ProjectsCard-Stacks' title={stacks.join(', ')}>{stacks.join(', ')}</div>
      <div className ='ProjectsCard-Introduction'>{introduction}</div>
    </div>
  );
}

export default ProjectsCard;