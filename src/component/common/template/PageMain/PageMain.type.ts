import { Dispatch, SetStateAction } from 'react';
import { CardDataProps } from '../Card/Card.type';
import { DescriptionModalDataProps } from '../DescriptionModal/DescriptionModal.type';
import { InputModalDataProps } from '../InputModal/InputModal.type';
import { ToDoProps } from '@/hook/useTodos';

export interface PageMainDataProps {
  toDoCard: CardDataProps;
  completedCard: CardDataProps;
  descriptionModal: DescriptionModalDataProps;
  createModal: InputModalDataProps;
  updateModal: InputModalDataProps;
}

export interface PageMainPresenterProps extends PageMainDataProps {
  onCreateClick: (response: ToDoProps) => void;
  onUpdateClick: (response: ToDoProps) => void;
  formState: ToDoProps;
  handleInput: (key: string, value: string) => void;
  toDos: ToDoProps[];
  handleClick: () => void;
  descriptionClick: () => void;
  updateSetClick: () => void;
  deleteSetClick: () => void;
  clearModal: () => void;
  setToDos: Dispatch<SetStateAction<ToDoProps[]>>;
  modal: string;
  selectToDo: string;
  setSelectToDo: Dispatch<SetStateAction<string>>;
}

// 親コンポーネントから受け継ぐ要素は今のところないが必要そう;
export interface PageMainContainerProps {
  todos: ToDoProps[];
}

// Storybook用のすべてを含んだ型はPageMainPresenterPropsに含まれるが必要そう→不要

//Container内部で新たに生じたLogicの型定義
export interface PageMainLogicProps {
  countId: () => void;
  onCreateClick: (response: ToDoProps) => void;
  onUpdateClick: (response: ToDoProps) => void;
  formState: ToDoProps;
  handleInput: (key: string, value: string) => void;
  modal: string;
  toDos: ToDoProps[];
  setToDos: Dispatch<SetStateAction<ToDoProps[]>>;
  clearModal: () => void;
  descriptionClick: () => void;
  handleClick: () => void;
  updateSetClick: () => void;
  deleteSetClick: () => void;
  selectToDo: string;
  setSelectToDo: Dispatch<SetStateAction<string>>;
}
