import React, { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";
import classNames from 'classnames';
import { ClassNamesFn } from "classnames/types";
import Modal from "components/common/Modal";
import { IProjectType } from "interface/ProjectType";

const style = require("./ProjectModal.scss");
const cx: ClassNamesFn = classNames.bind(style);

interface ProjectModalProps {
  isModal: boolean;
  setIsModal: Dispatch<SetStateAction<boolean>>;
  projectInfo: IProjectType,
};

const ProjectModal = ({ isModal, setIsModal, projectInfo }: ProjectModalProps) => {
  let [index, setIndex] = useState<number>(0);

  const { name, description, gallery, period, stacks } = projectInfo;

  // const increaseIndex = useCallback(() => {
  //   const interval = setInterval(() => {
  //     if (gallery!.length - 1 === index) {
  //       setIndex(0);
  //     } else {
  //       setIndex(index + 1);
  //     }
  //   }, 5000);
    
  //   return () => clearInterval(interval);
  // }, [gallery, index]);

  // useEffect(() => {
  //   increaseIndex();
  // }, [increaseIndex]);
    
  return (
    <Modal isModal={isModal} setIsModal={setIsModal} title ={name!} period={period!} stacks={stacks!}>
      <div className={cx('ProjectModal')}>
        <img className={cx('ProjectModal-Image')} src ={gallery![index]} alt ="gallerys" />
      </div>

      <div className={cx('ProjectModal-Contents')}>
        {description}
      </div>
    </Modal>
  );
};

export default ProjectModal;
