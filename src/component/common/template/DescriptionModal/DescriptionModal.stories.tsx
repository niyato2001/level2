import type { ComponentMeta, Story } from '@storybook/react';
import { DescriptionModal, DescriptionModalProps } from './DescriptionModal';
import { propObj } from './DescriptionModal.props';

export default {
  title: 'Common/template/DescriptionModal',
  component: DescriptionModal,
} as ComponentMeta<typeof DescriptionModal>;

const Template: Story<DescriptionModalProps> = (args) => <DescriptionModal {...args} />;

export const Default = Template.bind({});
Default.args = propObj.default;
