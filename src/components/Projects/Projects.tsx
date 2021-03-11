import React, { useState, useCallback } from 'react';
import classNames from 'classnames';
import { projectList } from 'data/ProjectList';
import ProjectsCard from './ProjectsCard';
import { IProjectType } from 'interface/ProjectType';
import ProjectModal from './ProjectModal';
import { ClassNamesFn } from 'classnames/types';
import { ProjectTypes } from 'enum/ProjectEnum';
import FadeIn from 'react-fade-in';
import projectTopics from 'data/models/projectTopics';
import PageTitle from 'components/Common/PageTitle';

const style = require('./Projects.scss');
const cx: ClassNamesFn = classNames.bind(style);

const Projects = (): JSX.Element => {
  const [topic, setTopic] = useState<ProjectTypes>(0);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [projectInfo, setProjectInfo] = useState<IProjectType>({});
  const { ALL } = ProjectTypes;

  const findProject = useCallback((id: number): void => {
    const info: IProjectType | undefined = projectList.find((project: IProjectType) => project.id === id);
    setProjectInfo(info!);
  }, []);

  const onSetTopic = useCallback((topicIdx: number): void => {
    if (topicIdx !== topic) {
      setTopic(topicIdx);
    }
  }, [topic]);

  const filterProjects: IProjectType[] = projectList.filter((project: IProjectType) => {
    switch (topic) {
      case ALL:
        return project;

      default:
        return project.member === topic;
    };
  });

  const projectLists: JSX.Element[] = filterProjects.map((project: IProjectType) => {
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
      <div className={cx('Projects')}>
        <div className={cx('Projects-Top')}>
          <div className={cx('Projects-Top-Contents')}>
            <PageTitle
              title='프로젝트 목록'
              subTitle='제가 지금까지 진행해온 프로젝트 목록입니다.'
            />

            <div className={cx('Projects-Top-Contents-Topics')}>
              {
                projectTopics.map((top: string, idx: number) => {
                  return (
                    <div
                      key={idx}
                      className={cx({
                      'Projects-Top-Contents-Topics-Current': topic === idx
                    })} onClick={() => onSetTopic(idx)}>{top}</div>
                  );
                })
              }
            </div>
          </div>
        </div>

        <div className ={cx('Projects-Grid')}>{projectLists}</div>
        {
          projectInfo.id && isModal ?
            <ProjectModal isModal={isModal} setIsModal={setIsModal} projectInfo ={projectInfo} /> : <></>
        }
      </div>
    </FadeIn>
  );
}

export default Projects;