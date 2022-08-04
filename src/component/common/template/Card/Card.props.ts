import { createLightProps } from '../../part/Icon/Icon.props';
import { CardDataProps } from './Card.type';

export const toDoProps: CardDataProps = {
  createLightIcon: createLightProps,
};

export const completedProps: CardDataProps = {
  createLightIcon: createLightProps,
};

export const propObj: { [key: string]: CardDataProps } = {
  toDo: toDoProps,
  completed: completedProps,
};
