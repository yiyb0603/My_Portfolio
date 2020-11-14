import React, { useState, useCallback } from 'react';
import { inject, observer } from 'mobx-react';
import Modal from 'components/common/Modal';
import { find } from 'lodash';
import { projectList } from 'Data/ProjectList';
import ProjectsCard from './ProjectsCard';
import './Projects.scss';
import { IProjectType } from 'interface/ProjectType';

const Projects = () => {
    const [isModal, setIsModal] = useState<boolean>(false);
    const [projectInfo, setProjectInfo] = useState<IProjectType>({});

    const findProject = useCallback((id: number) => {
        const info: IProjectType | undefined = find([...projectList], { id });
        setProjectInfo(info!);
    }, []);

    const projectLists = projectList.map((project: IProjectType) => {
        const { id, name, description, gallery, type, stacks, period } = project;
        return (
            <ProjectsCard
                key ={id}
                name ={name!}
                gallery ={gallery!}
                type ={type!}
                stacks={stacks!}
                period={period!}
                description ={description!}
                handleClick ={() => {
                    setIsModal(true);
                    findProject(id!);
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
                projectInfo.id && isModal ?
                <Modal isModal={isModal} setIsModal={setIsModal} projectInfo ={projectInfo} /> : <></>
            }
        </div>
    );
}

export default inject('store')(observer(Projects));