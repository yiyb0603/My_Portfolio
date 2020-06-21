import React from 'react';
import './ProjectsCard.scss';

interface ProjectsCardProps {
    key?: number;
    name: string;
    type: Array<string>;
    gallery: string;
    description: string;
    handleClick: () => void;
}

const ProjectsCard = ({ name, description, type, gallery, handleClick } : ProjectsCardProps) => {
    return (
        <div className ="ProjectsCard" onClick ={handleClick}>
            <h2>{type.join(",")}</h2>
            <img src ={gallery} alt ="gallery" />
            <div className ="ProjectsCard-Name">{name}</div>
        </div>
    );
}

export default ProjectsCard;