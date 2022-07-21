import { createLightProps } from '../../part/Icon/Icon.props';
import { CardProps } from './Card';

export const toDoProps: CardProps = {
  type: 'TO DO',
  createLightIcon: createLightProps,
  toDoList: ['テキスト', 'テキスト'],
};

export const completedProps: CardProps = {
  type: 'COMPLETED',
  createLightIcon: createLightProps,
  toDoList: ['テキスト', 'テキスト'],
};

export const propObj: { [key: string]: CardProps } = {
  toDo: toDoProps,
  completed: completedProps,
};
