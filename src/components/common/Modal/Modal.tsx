import React, { useState, useCallback, useEffect, Dispatch, SetStateAction } from 'react';
import { inject, observer } from 'mobx-react';
import { MdClose } from 'react-icons/md';
import './Modal.scss';
import { IProjectType } from 'interface/ProjectType';

interface ModalProps {
    isModal: boolean;
    setIsModal: Dispatch<SetStateAction<boolean>>;
    projectInfo: IProjectType
}

const Modal = ({ isModal, setIsModal, projectInfo }: ModalProps) => {
    let [index, setIndex] = useState<number>(0);

    const { name, description, gallery } = projectInfo;

    const increaseIndex = useCallback(() => {
        const interval = setInterval(() => {
            if (gallery!.length - 1 === index) {
                setIndex(0);
            } else {
                setIndex(index + 1);
            }
        }, 5000);
        
        return () => clearInterval(interval);
    }, [gallery, index]);

    useEffect(() => {
        increaseIndex();
    }, [increaseIndex]);

    return (
        <>
        {
            isModal &&
            <div className ="Modal">
                <div className ="Modal-Wrapper" onClick ={() => setIsModal(!isModal)}></div>
                <div className ="Modal-Box">
                    <MdClose className ="Modal-Box-Close" onClick ={() => setIsModal(!isModal)} />
                    <div className ="Modal-Box-Contents">
                        <div className ="Modal-Box-Contents-Images">
                            <img src ={gallery![index]} alt ="project images" />
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