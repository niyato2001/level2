import { IconProps } from '../../part/Icon';
import { ToDoProps } from '@/hook/useTodos';

export interface DescriptionModalDataProps {
  deleteDeepIcon: IconProps;
  title: string;
  description: string[];
}

//Dataに含まれないロジック要素を追加
export interface DescriptionModalPresenterProps extends DescriptionModalDataProps {
  clearModal: () => void;
}

// 親コンポーネントから受継ぐロジック要素
export interface DescriptionModalContainerProps {
  clearModal: () => void;
  toDo: ToDoProps;
}

//Storybook用のすべてを含んだ型
export interface DescriptionModalProps extends DescriptionModalPresenterProps {
  toDo: ToDoProps;
}

//Container内部で新たに生じたLogicの型定義
// export interface DescriptionModalLogicProps {}
