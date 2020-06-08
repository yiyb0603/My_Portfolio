import React from 'react';
import './ProjectsCard.scss';

interface ProjectsCardProps {
    key?: number;
    name: string;
    description: string;
    handleClick: () => void;
}

const ProjectsCard = ({ name, description, handleClick } : ProjectsCardProps) => {
    return (
        <div className ="ProjectsCard" onClick ={handleClick}>
            <div>{name}</div>
        </div>
    );
}

export default ProjectsCard;