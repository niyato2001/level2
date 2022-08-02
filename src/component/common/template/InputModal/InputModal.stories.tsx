import type { ComponentMeta, Story } from '@storybook/react';
import { InputModal, InputModalProps } from './InputModal';
import { propObj } from './InputModal.props';

export default {
  title: 'Common/template/InputModal',
  component: InputModal,
} as ComponentMeta<typeof InputModal>;

const Template: Story<InputModalProps> = (args) => <InputModal {...args} />;

export const Default = Template.bind({});
Default.args = propObj.default;
export const Update = Template.bind({});
Update.args = propObj.update;
