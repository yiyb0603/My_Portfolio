import { observable, action } from 'mobx';
import { autobind } from 'core-decorators';

@autobind
class ModalStore {
    @observable isModal: boolean = false;

    @action
    handleIsModal = (): void => {
        this.isModal = !this.isModal;
    }
}

export default ModalStore;