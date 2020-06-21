import React, { ReactNode } from 'react';
import { inject, observer } from 'mobx-react';
import { MdClose } from 'react-icons/md';
import './Modal.scss';

interface ModalProps {
    store?: any;
    children?: ReactNode;
}

const Modal = ({ store, children }: ModalProps) => {
    const { ModalStore } = store;
    const { isModal, handleIsModal }: { isModal: boolean; handleIsModal: () => void; } = ModalStore;
    return (
        <>
        {
            isModal &&
            <div className ="Modal">
                <div className ="Modal-Wrapper" onClick ={handleIsModal}></div>
                <div className ="Modal-Box">
                    <MdClose className ="Modal-Box-Close" onClick ={handleIsModal} />
                    <div className ="Modal-Box-Contents">
                        {children}
                    </div>
                </div>
            </div>
        }
        </>
    );
}

export default inject('store')(observer(Modal));