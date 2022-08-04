import { createLightProps } from '../../part/Icon/Icon.props';
import { CardDataProps } from './Card.type';

export const toDoProps: CardDataProps = {
  type: 'TO DO',
  createLightIcon: createLightProps,
};

export const completedProps: CardDataProps = {
  type: 'COMPLETED',
  createLightIcon: createLightProps,
};

export const propObj: { [key: string]: CardDataProps } = {
  toDo: toDoProps,
  completed: completedProps,
};
