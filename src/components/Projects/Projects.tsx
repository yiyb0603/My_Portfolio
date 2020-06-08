import React, { useState, useCallback } from 'react';
import { inject, observer } from 'mobx-react';
import Modal from 'components/common/Modal';
import { find } from 'lodash';
import { projectList } from 'Data/ProjectList';
import ProjectsCard from './ProjectsCard';
import './Projects.scss';

interface ProjectsProps {
    store?: any;
}

const Projects = ({ store } : ProjectsProps) => {
    const [projectInfo, setProjectInfo]: any = useState({});
    const { handleIsModal }: { handleIsModal: () => void; } = store.ModalStore;

    const findProject = useCallback((id: number) => {
        const info = find([...projectList], { id });
        setProjectInfo(info);
    }, []);

    const projectLists = projectList.map((project: { id: number; name: string; description: string; }) => {
        const { id, name, description } = project;
        return (
            <ProjectsCard
                key ={id}
                name ={name}
                description ={description}
                handleClick ={() => {
                    findProject(id);
                    handleIsModal();
                }}
            />
        )
    })

    return (
        <div className ="Projects">
            <div className ="Projects-Grid">
                {projectLists}
            </div>
            {
                projectInfo.id &&
                <Modal>
                    <div>{projectInfo.name}</div>
                    <div>{projectInfo.description}</div>
                </Modal>
            }
        </div>
    );
}

export default inject('store')(observer(Projects));