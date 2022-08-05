import { Dispatch, SetStateAction } from 'react';
import { IconProps } from '../../part/Icon';
import { ToDoProps } from '@/hook/useTodos';

export interface DeleteModalDataProps {
  deleteDeepIcon: IconProps;
  title: string;
}

export interface DeleteModalPresenterProps extends DeleteModalDataProps {
  clearModal: () => void;
  descriptionClick: () => void;
  onDeleteClick: () => void;
}

export interface DeleteModalContainerProps {
  clearModal: () => void;
  descriptionClick: () => void;
  toDos: ToDoProps[];
  setToDos: Dispatch<SetStateAction<ToDoProps[]>>;
  selectToDo: string;
}

export interface DeleteModalLogicProps {
  clearModal: () => void;
  descriptionClick: () => void;
  onDeleteClick: () => void;
}
