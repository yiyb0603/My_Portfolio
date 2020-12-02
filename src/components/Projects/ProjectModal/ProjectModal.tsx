import React, { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";
import classNames from 'classnames';
import { ClassNamesFn } from "classnames/types";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
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
  const [index, setIndex] = useState<number>(0);
  const { name, description, gallery, period, stacks } = projectInfo;

  const handlePrevClick = useCallback(() => {
    if (index <= 0) {
      setIndex(gallery!.length - 1);
      return;
    }

    setIndex(index - 1);
  }, [gallery, index]);

  const handleNextClick = useCallback(() => {
    if (index + 1 === gallery!.length) {
      setIndex(0);
      return;
    }

    setIndex(index + 1);
  }, [gallery, index]);

  return (
    <Modal isModal={isModal} setIsModal={setIsModal} title ={name!} period={period!} stacks={stacks!}>
      <div className={cx('ProjectModal')}>
        <div className={cx('ProjectModal-LeftArrow')} onClick={handlePrevClick}>
          <AiOutlineArrowLeft />
        </div>

        <div className={cx('ProjectModal-RightArrow')} onClick={handleNextClick}>
          <AiOutlineArrowRight />
        </div>
        <img className={cx('ProjectModal-Image')} src ={gallery![index]} alt ="gallerys" />
      </div>

      <div className={cx('ProjectModal-Select')}>
        <div>프로젝트 의도</div>
        <div>맡은 역할</div>
        <div>느낀점</div>
        <div>관련 링크</div>
      </div>
      <div className={cx('ProjectModal-Contents')}>
        <div>{description}</div>
      </div>
    </Modal>
  );
};

export default ProjectModal;
