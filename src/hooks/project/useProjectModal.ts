import { useState, useCallback } from 'react';
import { ProjectEnums } from 'lib/enum/ProjectEnum';

const useProjectModal = (gallery: string[]) => {
  const [index, setIndex] = useState<number>(0);
  const [topic, setTopic] = useState<ProjectEnums>(0);

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

  const handleImageToNewWindow = useCallback((galleryIdx: number): void => {
    window.open(gallery![galleryIdx], 'image', 'width = 800, heigh= 600, left = 400, top = 400, resizable = yes')
  }, [gallery]);

  const handleDotClick = useCallback((galleryIdx: number): void => {
    if (galleryIdx !== index) {
      setIndex(galleryIdx);
    }
  }, [index]);

  const handleSetTopic = useCallback((index: number): void => {
    if (topic !== index) {
      setTopic(index);
    }
  }, [topic]);

  return {
    index,
    topic,
    handlePrevClick,
    handleNextClick,
    handleDotClick,
    handleImageToNewWindow,
    handleSetTopic,
  };
};

export default useProjectModal;