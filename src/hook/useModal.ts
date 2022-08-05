import { useState, Dispatch, SetStateAction } from 'react';

export type ModalProps = 'description' | 'create' | 'update' | 'delete' | '';

interface UseModalReturnType {
  setModal: Dispatch<SetStateAction<ModalProps>>;
  modal: ModalProps;
  descriptionClick: () => void;
  clearModal: () => void;
  createClick: () => void;
  updateClick: () => void;
  deleteClick: () => void;
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
  const deleteClick = () => {
    setModal('delete');
  };
  return { setModal, modal, descriptionClick, clearModal, createClick, updateClick, deleteClick };
};
