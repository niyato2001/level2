import type { ComponentMeta, Story } from '@storybook/react';
import { DeleteModal, DeleteModalProps } from './DeleteModal';
import { propObj } from './DeleteModal.props';

export default {
  title: 'Common/template/DeleteModal',
  component: DeleteModal,
} as ComponentMeta<typeof DeleteModal>;

const Template: Story<DeleteModalProps> = (args) => <DeleteModal {...args} />;

export const Default = Template.bind({});
Default.args = propObj.default;
