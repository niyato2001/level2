import { Dispatch, SetStateAction } from 'react';
import { IconProps } from '../../part/Icon';
import { ToDoProps } from '@/hook/useTodos';

export interface InputModalDataProps {
  type: 'create' | 'update';
  deleteDeepIcon: IconProps;
}

export interface InputModalPresenterProps {
  type: 'create' | 'update';
  deleteDeepIcon: IconProps;
  clearModal: () => void;
  onClearModal: () => void;
  onCreateClick: () => void;
  handleInput: (key: string, value: string) => void;
  formState: ToDoProps;
}

export interface InputModalContainerProps extends InputModalPresenterProps {
  toDos: ToDoProps[];
  setToDos: Dispatch<SetStateAction<ToDoProps[]>>;
}

export interface InputModalLogicProps {
  clearModal: () => void;
  onClearModal: () => void;
  onCreateClick: () => void;
  handleInput: (key: string, value: string) => void;
  formState: ToDoProps;
  toDos: ToDoProps[];
  setToDos: Dispatch<SetStateAction<ToDoProps[]>>;
}

export interface InputModalLogic2Props {
  onClearModal: () => void;
  onCreateClick: () => void;
  handleInput: (key: string, value: string) => void;
  formState: ToDoProps;
}
