import { IconProps } from '../../part/Icon';
import { ToDoProps } from '@/hook/useTodos';

export interface DescriptionModalDataProps {
  deleteDeepIcon: IconProps;
}

//Dataに含まれないロジック要素を追加
export interface DescriptionModalPresenterProps extends DescriptionModalDataProps {
  clearModal: () => void;
  updateClick: () => void;
  toDo: ToDoProps;
}

// 親コンポーネントから受継ぐロジック要素
export interface DescriptionModalContainerProps {
  clearModal: () => void;
  updateClick: () => void;
  toDo: ToDoProps;
}

//Storybook用のすべてを含んだ型→不要

//Container内部で新たに生じたLogicの型定義
export interface DescriptionModalLogicProps {
  clearModal: () => void;
  updateClick: () => void;
  toDo: ToDoProps;
}
