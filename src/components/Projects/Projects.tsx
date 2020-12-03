import React, { useState, useCallback } from 'react';
import { find } from 'lodash';
import { projectList } from 'Data/ProjectList';
import ProjectsCard from './ProjectsCard';
import './Projects.scss';
import { IProjectType } from 'interface/ProjectType';
import ProjectModal from './ProjectModal';

const Projects = () => {
    const [isModal, setIsModal] = useState<boolean>(false);
    const [projectInfo, setProjectInfo] = useState<IProjectType>({});

    const findProject = useCallback((id: number) => {
        const info: IProjectType | undefined = find([...projectList], { id });
        setProjectInfo(info!);
    }, []);

    const projectLists = projectList.map((project: IProjectType) => {
        const { id, name, introduction, gallery, type, stacks, period, thumbnail, feel, role, link } = project;
        return (
            <ProjectsCard
                key ={id}
                name ={name!}
                gallery ={gallery!}
                type ={type!}
                stacks={stacks!}
                period={period!}
                feel={feel!}
                role={role!}
                link={link!}
                thumbnail={thumbnail!}
                introduction ={introduction!}
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
                <ProjectModal isModal={isModal} setIsModal={setIsModal} projectInfo ={projectInfo} /> : <></>
            }
        </div>
    );
}

export default Projects;