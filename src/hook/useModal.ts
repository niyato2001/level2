import { useState } from 'react';

type ModalProps = 'description' | 'create' | 'update' | 'delete' | '';

interface UseModalReturnType {
  modal: ModalProps;
  descriptionClick: () => void;
  clearModal: () => void;
}

export const useModal = (): UseModalReturnType => {
  const [modal, setModal] = useState<ModalProps>('');
  const descriptionClick = (): void => {
    setModal('description');
  };
  const clearModal = (): void => {
    setModal('');
  };
  return { modal, descriptionClick, clearModal };
};
