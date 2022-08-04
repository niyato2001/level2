import type { ComponentMeta, Story } from '@storybook/react';
import { PageMain } from './PageMain';
import { propObj } from './PageMain.props';
import { PageMainContainerProps } from './PageMain.type';

export default {
  title: 'Common/template/PageMain',
  component: PageMain,
} as ComponentMeta<typeof PageMain>;

const Template: Story<PageMainContainerProps> = (args) => <PageMain {...args} />;

export const Default = Template.bind({});
Default.args = propObj.default;
