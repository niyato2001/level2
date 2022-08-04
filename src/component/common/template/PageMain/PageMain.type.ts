import { Dispatch, SetStateAction } from 'react';
import { CardProps } from '../Card/Card';
import { DescriptionModalProps } from '../DescriptionModal/DescriptionModal';
import { InputModalDataProps } from '../InputModal/InputModal.type';
import { ToDoProps } from '@/hook/useTodos';

export interface PageMainDataProps {
  toDoCard: CardProps;
  completedCard: CardProps;
  descriptionModal: DescriptionModalProps;
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
}

// PageMainのPresenterに含まれない親コンポーネントから受け継ぐ要素は今のところないので不要
// export interface PageMainContainerProps extends PageMainPresenterProps {

// }

export interface PageMainLogicProps {
  modal: string;
  toDos: ToDoProps[];
  setToDos: Dispatch<SetStateAction<ToDoProps[]>>;
  clearModal: () => void;
  descriptionClick: () => void;
  createClick: () => void;
  updateClick: () => void;
}
