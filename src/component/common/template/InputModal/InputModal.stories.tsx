import type { ComponentMeta, Story } from '@storybook/react';
import { InputModal } from './InputModal';
import { propObj } from './InputModal.props';
import { InputModalPresenterProps } from './InputModal.type';

export default {
  title: 'Common/template/InputModal',
  component: InputModal,
} as ComponentMeta<typeof InputModal>;

const Template: Story<InputModalPresenterProps> = (args) => <InputModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'create',
  ...propObj.default,
  formState: { title: '', description: '', isCompleted: false, id: -1 },
};
export const Update = Template.bind({});
Update.args = {
  type: 'update',
  ...propObj.update,
  formState: { title: '', description: '', isCompleted: false, id: -1 },
};
