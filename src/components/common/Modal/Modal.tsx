import React, { Dispatch, SetStateAction, ReactNode, useCallback } from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import { AiOutlineClose } from 'react-icons/ai';

const style = require('./Modal.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface ModalProps {
  isModal: boolean;
  setIsModal: Dispatch<SetStateAction<boolean>>;
  title: string;
  period: string;
  stacks: string[];
  children?: ReactNode;
};

const Modal = ({ isModal, setIsModal, title, period, stacks, children }: ModalProps) => {
  const handleCloseModal = useCallback((): void => {
    setIsModal(!isModal);
  }, [isModal, setIsModal]);

  return (
    <>
      <div className={cx('Modal-Wrapper')} onClick={handleCloseModal}></div>
      <div className={cx('Modal')}>

        <div className={cx('Modal-Top')}>
          <div className={cx('Modal-Top-TopWrapper')}>
            <div className={cx('Modal-Top-TopWrapper-TitleWrapper')}>
              <div className={cx('Modal-Top-TopWrapper-TitleWrapper-Title')}>{title}</div>
              <div className={cx('Modal-Top-TopWrapper-TitleWrapper-Period')}>{period}</div>
            </div>
            <AiOutlineClose className={cx('Modal-Top-TopWrapper-Close')} />
          </div>

          <div className={cx('Modal-Top-StackWrapper')}>
            {
              stacks.map((stack: string, index: number) => {
                return <div className={cx('Modal-Top-StackWrapper-Stack')} key={index}>{stack}</div>
              })
            }
          </div>
        </div>

        <div className={cx('Modal-Contents')}>
          {children && children}
        </div>
      </div>
    </>
  );
}

export default Modal;