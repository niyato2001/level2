import type { ComponentMeta, Story } from '@storybook/react';
import { propObj } from './InputModal.props';
import { InputModalProps } from './InputModal.type';
import { InputModal } from './index';

export default {
  title: 'Common/template/InputModal',
  component: InputModal,
} as ComponentMeta<typeof InputModal>;

const Template: Story<InputModalProps> = (args) => <InputModal {...args} />;

export const Default = Template.bind({});
Default.args = propObj.default;
export const Update = Template.bind({});
Update.args = propObj.update;
