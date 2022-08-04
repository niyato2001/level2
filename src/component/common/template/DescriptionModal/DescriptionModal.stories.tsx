import type { ComponentMeta, Story } from '@storybook/react';
import { propObj } from './DescriptionModal.props';
import { DescriptionModalProps } from './DescriptionModal.type';
import { DescriptionModal } from './index';

export default {
  title: 'Common/template/DescriptionModal',
  component: DescriptionModal,
} as ComponentMeta<typeof DescriptionModal>;

const Template: Story<DescriptionModalProps> = (args) => <DescriptionModal {...args} />;

export const Default = Template.bind({});
Default.args = propObj.default;
