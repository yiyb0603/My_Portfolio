import React, { useState, useCallback } from 'react';
import { find } from 'lodash';
import classNames from 'classnames';
import { projectList } from 'data/ProjectList';
import ProjectsCard from './ProjectsCard';
import { IProjectType } from 'interface/ProjectType';
import ProjectModal from './ProjectModal';
import { ClassNamesFn } from 'classnames/types';
import { ProjectTypes } from 'enum/ProjectEnum';
import FadeIn from 'react-fade-in';

const style = require('./Projects.scss');
const cx: ClassNamesFn = classNames.bind(style);

const Projects = (): JSX.Element => {
  const [topic, setTopic] = useState<ProjectTypes>(0);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [projectInfo, setProjectInfo] = useState<IProjectType>({});

  const topics: string[] = ['전체', '팀 프로젝트', '개인 프로젝트'];

  const findProject = useCallback((id: number): void => {
    const info: IProjectType | undefined = projectList.find((project: IProjectType) => project.id === id);
    setProjectInfo(info!);
  }, []);

  const { ALL } = ProjectTypes;

  const filterProjects: IProjectType[] = projectList.filter((project: IProjectType) => {
    switch (topic) {
      case ALL:
        return project;

      default:
        return project.member === topic;
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