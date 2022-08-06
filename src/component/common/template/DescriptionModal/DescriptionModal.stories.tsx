import type { ComponentMeta, Story } from '@storybook/react';
import { DescriptionModal } from './DescriptionModal';
import { propObj } from './DescriptionModal.props';
import { DescriptionModalPresenterProps } from './DescriptionModal.type';

export default {
  title: 'Common/template/DescriptionModal',
  component: DescriptionModal,
} as ComponentMeta<typeof DescriptionModal>;

const Template: Story<DescriptionModalPresenterProps> = (args) => <DescriptionModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...propObj.default,
  toDo: {
    isCompleted: false,
    title: '経営の必読書を読む',
    description: 'イシューから始めよ',
    id: -1,
  },
};
