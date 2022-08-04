import { Dispatch, SetStateAction } from 'react';
import { IconProps } from '../../part/Icon';
import { ToDoProps } from '@/hook/useTodos';

export interface InputModalDataProps {
  type: 'create' | 'update';
  deleteDeepIcon: IconProps;
}

//Dataに含まれないロジック要素を追加
export interface InputModalPresenterProps extends InputModalDataProps {
  clearModal: () => void;
  onClearModal: () => void;
  onCreateClick: () => void;
  handleInput: (key: string, value: string) => void;
  formState: ToDoProps;
}

// 親コンポーネントから受継ぐロジック要素
export interface InputModalContainerProps {
  clearModal: () => void;
  toDos: ToDoProps[];
  setToDos: Dispatch<SetStateAction<ToDoProps[]>>;
}

//Storybook用のすべてを含んだ型→不要PresenterPropsでOK

//Container内部で新たに生じたLogicの型定義
export interface InputModalLogicProps {
  clearModal: () => void;
  onClearModal: () => void;
  onCreateClick: () => void;
  handleInput: (key: string, value: string) => void;
  formState: ToDoProps;
  toDos: ToDoProps[];
  setToDos: Dispatch<SetStateAction<ToDoProps[]>>;
}
