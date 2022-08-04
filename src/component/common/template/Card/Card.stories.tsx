import type { ComponentMeta, Story } from '@storybook/react';
import { createLightProps } from '../../part/Icon/Icon.props';
import { Card } from './Card';
import { propObj } from './Card.props';
import { CardPresenterProps } from './Card.type';

export default {
  title: 'Common/template/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: Story<CardPresenterProps> = (args) => <Card {...args} />;

export const ToDo = Template.bind({});
ToDo.args = {
  createLightIcon: createLightProps,
  type: 'TO DO',
  toDos: [{ isCompleted: false, title: 'name', description: 'description' }],
};
export const Completed = Template.bind({});
Completed.args = { ...propObj.completed, type: 'COMPLETED' };
