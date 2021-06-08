import { useState, useCallback, useMemo } from 'react';
import { projectList } from 'data/ProjectList';
import { ProjectTypes } from 'lib/enum/ProjectEnum';
import { IProject } from 'lib/interface/ProjectType';
import useModal from 'hooks/util/useModal';

const useProjects = () => {
  const [isModal, handleOpenModal, handleCloseModal] = useModal();

  const [topic, setTopic] = useState<ProjectTypes>(0);
  const [projectInfo, setProjectInfo] = useState<IProject>({});

  const { ALL } = ProjectTypes;

  const findProject = useCallback((id: number): void => {
    const info: IProject | undefined = projectList.find((project: IProject) => project.id === id);
    setProjectInfo(info!);
  }, []);

  const onChangeTopic = useCallback((topicIdx: number): void => {
    if (topicIdx !== topic) {
      setTopic(topicIdx);
    }
  }, [topic]);

  const onClickProject = useCallback((id: number): void => {
    handleOpenModal();
    findProject(id);
  }, [findProject, handleOpenModal]);

  const filterProjects: IProject[] = useMemo(() => {
    return projectList.filter((project: IProject) => {
      switch (topic) {
        case ALL:
          return project;
  
        default:
          return project.member === topic;
      };
    });
  }, [ALL, topic]);

  return {
    isModal,
    handleCloseModal,
    projectInfo,
    topic,
    onChangeTopic,
    onClickProject,
    filterProjects,
  };
};

export default useProjects;