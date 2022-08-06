import { Dispatch, SetStateAction } from 'react';
import { IconProps } from '@/component/common/part/Icon';
import { ToDoProps } from '@/hook/useTodos';

export interface CardDataProps {
  createLightIcon: IconProps;
}

export interface CardPresenterProps extends CardDataProps {
  type: 'TO DO' | 'COMPLETED';
  toDos: ToDoProps[];
  handleClick: () => void;
  selectClick: (i: number) => void;
  handleCheck: (checked: boolean, i: number) => void;
}

export interface CardContainerProps {
  type: 'TO DO' | 'COMPLETED';
  toDos: ToDoProps[];
  handleClick: () => void;
  descriptionClick: () => void;
  setSelectToDo: Dispatch<SetStateAction<string>>;
  selectToDo: string;
  setToDos: Dispatch<SetStateAction<ToDoProps[]>>;
}

export interface LogicProps {
  type: 'TO DO' | 'COMPLETED';
  toDos: ToDoProps[];
  handleClick: () => void;
  selectClick: (i: number) => void;
  handleCheck: (checked: boolean, i: number) => void;
}
