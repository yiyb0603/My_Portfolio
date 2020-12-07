import React, { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";
import classNames from 'classnames';
import { ClassNamesFn } from "classnames/types";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Modal from "components/common/Modal";
import { IProjectType } from "interface/ProjectType";
import { ProjectEnums } from "enum/ProjectEnum";

const style = require("./ProjectModal.scss");
const cx: ClassNamesFn = classNames.bind(style);

interface ProjectModalProps {
  isModal: boolean;
  setIsModal: Dispatch<SetStateAction<boolean>>;
  projectInfo: IProjectType,
};

const ProjectModal = ({ isModal, setIsModal, projectInfo }: ProjectModalProps) => {
  const [index, setIndex] = useState<number>(0);
  const [topic, setTopic] = useState<ProjectEnums>(0);
  const [mouseEnter, setMouseEnter] = useState<boolean>(false);

  const [imageDots, setImageDots] = useState<JSX.Element[]>([]);

  const { name, description, gallery, period, stacks, feel, link, role } = projectInfo;
  const topics: string[] | Element[] = [description!, role!, feel!, link!];
  const topicNames: string[] = ['프로젝트 설명', '맡은 역할', '느낀점', '관련 링크'];

  const handlePrevClick = useCallback((): void => {
    if (index <= 0) {
      setIndex(gallery!.length - 1);
      return;
    }

    setIndex(index - 1);
  }, [gallery, index]);

  const handleNextClick = useCallback((): void => {
    if (index + 1 === gallery!.length) {
      setIndex(0);
      return;
    }

    setIndex(index + 1);
  }, [gallery, index]);

  const handleDotClick = useCallback((galleryIdx: number): void => {
    if (galleryIdx !== index) {
      setIndex(galleryIdx);
      setImageDots([]);
    }
  }, [index]);

  useEffect(() => {
    setImageDots(gallery!.map((_, galleryIdx: number) => {
      return (
        <div key={galleryIdx} className={cx('ProjectModal-DotWrapper-Dot', {
          'ProjectModal-DotWrapper-Dot-Current': galleryIdx === index
        })} onClick={() => handleDotClick(galleryIdx)}></div>
      );
    }));
  }, [gallery, handleDotClick, index]);

  return (
    <Modal isModal={isModal} setIsModal={setIsModal} title ={name!} period={period!} stacks={stacks!}>
      <div className={cx('ProjectModal')} onMouseEnter={() => setMouseEnter(true)} onMouseLeave={() => setMouseEnter(false)}>
        {
          mouseEnter && gallery!.length > 1 ?
          <>
            <div className={cx('ProjectModal-LeftArrow')} onClick={handlePrevClick}>
              <AiOutlineArrowLeft />
            </div>

            <div className={cx('ProjectModal-RightArrow')} onClick={handleNextClick}>
              <AiOutlineArrowRight />
            </div>
          </> : <></>
        }

        <div className={cx('ProjectModal-DotWrapper')}>{imageDots}</div>  
        <img className={cx('ProjectModal-Image')} src ={gallery![index]} alt ="gallerys" />
      </div>

      <div className={cx('ProjectModal-Select')}>
        {
          topicNames.map((name: string, index: number) => {
            return (
              <div className={cx({
                'ProjectModal-Select-Selected': topic === index
              })} key={index} onClick={() => setTopic(index)}>{name}</div>
            );
          })
        }
      </div>
      <div className={cx('ProjectModal-Contents')}>
        <div dangerouslySetInnerHTML={{ __html: topics[topic] }}></div>
      </div>
    </Modal>
  );
};

export default ProjectModal;
