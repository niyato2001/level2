import type { ComponentMeta, Story } from '@storybook/react';
import { Button, ButtonProps } from './';

export default {
  title: 'Common/part/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Green = Template.bind({});
Green.args = { children: <button className='btn green-gradient'>Green</button> };
export const Pink = Template.bind({});
Pink.args = { children: <button className='btn pink-gradient'>Pink</button> };
