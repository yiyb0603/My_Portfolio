import { useCallback, useState } from 'react';

const useModal = () => {
  const [isModal, setIsModal] = useState<boolean>(false);

  const handleOpenModal = useCallback((): void => {
    setIsModal(true);
  }, []);

  const handleCloseModal = useCallback((): void => {
    setIsModal(false);
  }, []);

  return [
    isModal,
    handleOpenModal,
    handleCloseModal,
  ] as const;
};

export default useModal;