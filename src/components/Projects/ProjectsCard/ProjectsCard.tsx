import React from 'react';
import './ProjectsCard.scss';

interface ProjectsCardProps {
    name: string;
    type: Array<string>;
    stacks: string[];
    period: string;
    gallery: string[];
    description: string;
    handleClick: () => void;
}

const ProjectsCard = ({ name, description, type, stacks, period, gallery, handleClick } : ProjectsCardProps) => {
    return (
        <div className ="ProjectsCard" onClick ={handleClick}>
            <h2>{type.join(",")}</h2>
            <img src ={gallery[0]} alt ="gallery" />
            <div className ="ProjectsCard-Name">{name}</div>
        </div>
    );
}

export default ProjectsCard;