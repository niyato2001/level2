import { useState, Dispatch, SetStateAction } from 'react';

export type ModalProps = 'description' | 'create' | 'update' | 'delete' | '';

interface UseModalReturnType {
  setModal: Dispatch<SetStateAction<ModalProps>>;
  modal: ModalProps;
  descriptionClick: () => void;
  clearModal: () => void;
  createClick: () => void;
  updateClick: () => void;
}

export const useModal = (): UseModalReturnType => {
  const [modal, setModal] = useState<ModalProps>('');
  const descriptionClick = () => {
    setModal('description');
  };
  const clearModal = () => {
    setModal('');
  };
  const createClick = () => {
    setModal('create');
  };
  const updateClick = () => {
    setModal('update');
  };
  return { setModal, modal, descriptionClick, clearModal, createClick, updateClick };
};
