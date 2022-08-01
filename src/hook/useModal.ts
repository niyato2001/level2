import { useState } from 'react';

type ModalProps = 'description' | 'create' | 'update' | 'delete' | '';

interface UseModalReturnType {
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
  return { modal, descriptionClick, clearModal, createClick, updateClick };
};
