import React, { useState, useCallback, useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import { MdClose } from 'react-icons/md';
import './Modal.scss';

interface ModalProps {
    store?: any;
    projectInfo: any
}

const Modal = ({ store, projectInfo }: ModalProps) => {
    const { ModalStore } = store;
    const { isModal, handleIsModal }: { isModal: boolean; handleIsModal: () => void; } = ModalStore;
    let [index, setIndex] = useState<number>(0);

    const { name, description, gallery } = projectInfo

    const increaseIndex = useCallback(() => {
        setInterval(() => {
            if (gallery.length - 1 === index) {
                setIndex(0);
            } else {
                setIndex(index + 1);
            }
        }, 5000);
    }, [index, gallery.length]);

    useEffect(() => {
        increaseIndex();
    }, [increaseIndex]);

    return (
        <>
        {
            isModal &&
            <div className ="Modal">
                <div className ="Modal-Wrapper" onClick ={handleIsModal}></div>
                <div className ="Modal-Box">
                    <MdClose className ="Modal-Box-Close" onClick ={handleIsModal} />
                    <div className ="Modal-Box-Contents">
                        <div className ="Modal-Box-Contents-Images">
                            <img src ={gallery[index]} alt ="project images" />
                        </div>

                        <div className ="Modal-Box-Contents-Contents">
                            <div>{name}</div>
                            <div>{description}</div>
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    );
}

export default inject('store')(observer(Modal));