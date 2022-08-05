import { Dispatch, SetStateAction } from 'react';
import { IconProps } from '../../part/Icon';
import { ToDoProps } from '@/hook/useTodos';

export interface DeleteModalDataProps {
  deleteDeepIcon: IconProps;
}

export interface DeleteModalPresenterProps extends DeleteModalDataProps {
  clearModal: () => void;
  descriptionClick: () => void;
  onDeleteClick: () => void;
  toDo: ToDoProps;
}

export interface DeleteModalContainerProps {
  clearModal: () => void;
  descriptionClick: () => void;
  toDos: ToDoProps[];
  setToDos: Dispatch<SetStateAction<ToDoProps[]>>;
  selectToDo: string;
  toDo: ToDoProps;
}

export interface DeleteModalLogicProps {
  clearModal: () => void;
  descriptionClick: () => void;
  onDeleteClick: () => void;
  toDo: ToDoProps;
}
