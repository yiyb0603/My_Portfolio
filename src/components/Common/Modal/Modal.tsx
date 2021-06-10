import React, { memo, ReactNode } from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import { AiOutlineClose } from 'react-icons/ai';

const style = require('./Modal.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface ModalProps {
  handleCloseModal: () => void;
  title: string;
  period: string;
  stacks: string[];
  children?: ReactNode;
};

const Modal = ({
  handleCloseModal,
  title,
  period,
  stacks,
  children,
}: ModalProps): JSX.Element => {
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
            
            <AiOutlineClose className={cx('Modal-Top-TopWrapper-Close')} onClick={handleCloseModal} />
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

export default memo(Modal);