import { createLightProps } from '../../part/Icon/Icon.props';
import { CardProps } from './Card';

export const toDoProps: CardProps = {
  type: 'TO DO',
  createLightIcon: createLightProps,
  toDoList: [
    { title: 'テキスト1', isCompleted: false },
    { title: 'テキスト2', isCompleted: false },
  ],
};

export const completedProps: CardProps = {
  type: 'COMPLETED',
  createLightIcon: createLightProps,
  toDoList: [
    { title: 'テキスト1', isCompleted: true },
    { title: 'テキスト2', isCompleted: true },
  ],
};

export const propObj: { [key: string]: CardProps } = {
  toDo: toDoProps,
  completed: completedProps,
};
