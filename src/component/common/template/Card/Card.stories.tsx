import type { ComponentMeta, Story } from '@storybook/react';
import { Card, CardFcProps } from './Card';
import { propObj } from './Card.props';

export default {
  title: 'Common/template/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: Story<CardFcProps> = (args) => <Card {...args} />;

export const ToDo = Template.bind({});
ToDo.args = propObj.toDo;
export const Completed = Template.bind({});
Completed.args = propObj.completed;
