import { Dispatch, SetStateAction } from 'react';
import { CardDataProps } from '../Card/Card.type';
import { DescriptionModalDataProps } from '../DescriptionModal/DescriptionModal.type';
import { InputModalDataProps } from '../InputModal/InputModal.type';
import { ToDoProps } from '@/hook/useTodos';

export interface PageMainDataProps {
  toDo: 'TO DO' | 'COMPLETED';
  completed: 'TO DO' | 'COMPLETED';
  toDoCard: CardDataProps;
  completedCard: CardDataProps;
  descriptionModal: DescriptionModalDataProps;
  createModal: InputModalDataProps;
  updateModal: InputModalDataProps;
}

export interface PageMainPresenterProps extends PageMainDataProps {
  toDos: ToDoProps[];
  createClick: () => void;
  descriptionClick: () => void;
  updateClick: () => void;
  clearModal: () => void;
  setToDos: Dispatch<SetStateAction<ToDoProps[]>>;
  modal: string;
  selectToDo: string;
  setSelectToDo: Dispatch<SetStateAction<string>>;
}

// 親コンポーネントから受け継ぐ要素は今のところないので不要
// export interface PageMainContainerProps  {

// }

// Storybook用のすべてを含んだ型はPageMainPresenterPropsに含まれるので不要
// export interface PageMainProps extends PageMainPresenterProps {

// }

//Container内部で新たに生じたLogicの型定義
export interface PageMainLogicProps {
  modal: string;
  toDos: ToDoProps[];
  setToDos: Dispatch<SetStateAction<ToDoProps[]>>;
  clearModal: () => void;
  descriptionClick: () => void;
  createClick: () => void;
  updateClick: () => void;
  selectToDo: string;
  setSelectToDo: Dispatch<SetStateAction<string>>;
}
