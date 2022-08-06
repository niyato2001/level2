import type { ComponentMeta, Story } from '@storybook/react';
import { DeleteModal } from './DeleteModal';
import { propObj } from './DeleteModal.props';
import { DeleteModalPresenterProps } from './DeleteModal.type';

export default {
  title: 'Common/template/DeleteModal',
  component: DeleteModal,
} as ComponentMeta<typeof DeleteModal>;

const Template: Story<DeleteModalPresenterProps> = (args) => <DeleteModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...propObj.default,
  toDo: {
    title: '経営の必読書を読む',
    description: '起業のファイナンス',
    isCompleted: false,
    id: -1,
  },
};
