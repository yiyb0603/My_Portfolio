import React, { useState, useCallback } from 'react';
import { find } from 'lodash';
import classNames from 'classnames';
import { projectList } from 'Data/ProjectList';
import ProjectsCard from './ProjectsCard';
import { IProjectType } from 'interface/ProjectType';
import ProjectModal from './ProjectModal';
import { ClassNamesFn } from 'classnames/types';
import { ProjectTypes } from 'enum/ProjectEnum';
import FadeIn from 'react-fade-in';

const style = require('./Projects.scss');
const cx: ClassNamesFn = classNames.bind(style);

const Projects = () => {
  const [topic, setTopic] = useState<ProjectTypes>(0);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [projectInfo, setProjectInfo] = useState<IProjectType>({});

  const topics: string[] = ['전체', 'Web', 'Server'];

  const findProject = useCallback((id: number) => {
    const info: IProjectType | undefined = find([...projectList], { id });
    setProjectInfo(info!);
  }, []);

  const filterProjects: IProjectType[] = projectList.filter((project: IProjectType) => {
    const { type } = project!;
    switch (topic) {
      case 0:
        return project;
              
    case 1:
      return type!.includes("Front End");

    case 2:
      return type!.includes("Back End");

    default:
      return null;
    };
  });

  const projectLists = filterProjects.map((project: IProjectType) => {
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
      );
    });

  return (
    <FadeIn>
      <div className ={cx("Projects")}>
        <div className={cx("Projects-Top")}>
        {
          topics.map((top: string, idx: number) => {
            return (
              <div key={idx} className={cx({
                'Projects-Top-Current': topic === idx
              })} onClick={() => setTopic(idx)}>{top}</div>
            );
          })
        }
        </div>

        <div className ={cx("Projects-Grid")}>{projectLists}</div>
        {
          projectInfo.id && isModal ?
            <ProjectModal isModal={isModal} setIsModal={setIsModal} projectInfo ={projectInfo} /> : <></>
        }
      </div>
    </FadeIn>
  );
}

export default Projects;