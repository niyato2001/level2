import type { ComponentMeta, Story } from '@storybook/react';
import { propObj } from './PageMain.props';
import { PageMainProps } from './PageMain.type';
import { PageMain } from './index';

export default {
  title: 'Common/template/PageMain',
  component: PageMain,
} as ComponentMeta<typeof PageMain>;

const Template: Story<PageMainProps> = (args) => <PageMain {...args} />;

export const Default = Template.bind({});
Default.args = propObj.default;
