import React, { useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { IProject } from 'lib/interface/ProjectType';
import topicNames from 'lib/model/topicNames';
import useProjectModal from 'hooks/project/useProjectModal';
import Modal from 'components/Common/Modal';

import 'react-lazy-load-image-component/src/effects/blur.css';

const style = require('./ProjectModal.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface ProjectModalProps {
  handleCloseModal: () => void;
  projectInfo: IProject;
};

const ProjectModal = ({
  handleCloseModal,
  projectInfo,
}: ProjectModalProps): JSX.Element => {
  const [mouseEnter, setMouseEnter] = useState<boolean>(false);
  const [imageDots, setImageDots] = useState<JSX.Element[]>([]);

  const { name, gallery, period, stacks, description, role, feel, link } = projectInfo;
  const topics: string[] | Element[] = useMemo(() => {
    return [description!, role!, feel!, link!];
  }, [description, feel, link, role]);

  const {
    index,
    topic,
    handlePrevClick,
    handleNextClick,
    handleDotClick,
    handleSetTopic,
  } = useProjectModal(gallery!);
  
  useEffect(() => {
    setImageDots(gallery!.map((_, galleryIdx: number) => {
      return (
        <div key={galleryIdx} className={cx('ProjectModal-DotWrapper-Dot', {
          'ProjectModal-DotWrapper-Dot-Current': galleryIdx === index,
        })} onClick={() => handleDotClick(galleryIdx)}></div>
      );
    }));
  }, [gallery, handleDotClick, index]);

  return (
    <Modal
      handleCloseModal={handleCloseModal}
      title ={name!}
      period={period!}
      stacks={stacks!}
    >
      <div
        className={cx('ProjectModal')}
        onMouseEnter={() => setMouseEnter(true)}
        onMouseLeave={() => setMouseEnter(false)}
      >
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
        <LazyLoadImage
          className={cx('ProjectModal-Image')}
          onClick={() => window.open(gallery![index], 'image', 'width = 800, heigh= 600, left = 400, top = 400, resizable = yes')}
          src={gallery![index]}
          effect='blur'
          alt='gallerys'
        />
      </div>

      <div className={cx('ProjectModal-Select')}>
        {
          topicNames.map((name: string, index: number) => {
            return (
              <div
                key={index}
                className={cx({
                  'ProjectModal-Select-Selected': topic === index,
                })}
                onClick={() => handleSetTopic(index)}
              >
                {name}
              </div>
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
