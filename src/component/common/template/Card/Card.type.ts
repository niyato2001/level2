import { IconProps } from '@/component/common/part/Icon';
import { ToDoProps } from '@/hook/useTodos';

export interface CardDataProps {
  type: 'TO DO' | 'COMPLETED';
  createLightIcon: IconProps;
}

export interface CardPresenterProps extends CardDataProps {
  toDos: ToDoProps[];
  handleClick: () => void;
  descriptionClick: () => void;
}

export interface CardContainerProps {
  toDos: ToDoProps[];
  handleClick: () => void;
  descriptionClick: () => void;
}

export interface CardProps extends CardDataProps {
  toDos: ToDoProps[];
  handleClick: () => void;
  descriptionClick: () => void;
}

export interface LogicProps {
  toDos: ToDoProps[];
  handleClick: () => void;
  descriptionClick: () => void;
}
