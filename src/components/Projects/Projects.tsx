import React, { useMemo } from 'react';
import FadeIn from 'react-fade-in';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import useProjects from 'hooks/project/useProjects';
import { IProject } from 'lib/interface/ProjectType';
import projectTopics from 'data/models/projectTopics';
import PageTitle from 'components/Common/PageTitle';
import ProjectModal from './ProjectModal';
import ProjectsCard from './ProjectsCard';

const style = require('./Projects.scss');
const cx: ClassNamesFn = classNames.bind(style);

const Projects = (): JSX.Element => {
  const {
    isModal,
    handleCloseModal,
    projectInfo,
    topic,
    onChangeTopic,
    onClickProject,
    filterProjects,
  } = useProjects();

  const projectLists: JSX.Element[] = useMemo(() => {
    return filterProjects.map((project: IProject) => {
      const { id, name, introduction, gallery, type, stacks, period, thumbnail } = project;
  
      return (
        <ProjectsCard
          key={id}
          name={name!}
          gallery={gallery!}
          type={type!}
          stacks={stacks!}
          period={period!}
          thumbnail={thumbnail!}
          introduction={introduction!}
          handleClick={() => onClickProject(id!)}
        />
      );
    });
  }, [filterProjects, onClickProject]);

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
                    })} onClick={() => onChangeTopic(idx)}>{top}</div>
                  );
                })
              }
            </div>
          </div>
        </div>

        <div className={cx('Projects-Grid')}>{projectLists}</div>
          {
            projectInfo.id &&
            isModal ?
            <ProjectModal
              handleCloseModal={handleCloseModal}
              projectInfo ={projectInfo}
            /> : <></>
          }
      </div>
    </FadeIn>
  );
}

export default Projects;