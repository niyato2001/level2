import type { ComponentMeta, Story } from '@storybook/react';
import { propObj } from './Icon.props';
import { Icon, IconProps } from './';

export default {
  title: 'Common/part/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const CreateDeepIcon = Template.bind({});
CreateDeepIcon.args = propObj.createDeepIcon;

export const CreateLightIcon = Template.bind({});
CreateLightIcon.args = propObj.createLightIcon;

export const DeleteDeepIcon = Template.bind({});
DeleteDeepIcon.args = propObj.deleteDeepIcon;

export const DeleteLightIcon = Template.bind({});
DeleteLightIcon.args = propObj.deleteLightIcon;

export const SymbolLogoIcon = Template.bind({});
SymbolLogoIcon.args = propObj.symbolLogoIcon;

export const TextLogoIcon = Template.bind({});
TextLogoIcon.args = propObj.textLogoIcon;
