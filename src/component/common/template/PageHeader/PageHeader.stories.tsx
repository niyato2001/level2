import type { ComponentMeta, Story } from '@storybook/react';
import { PageHeader, PageHeaderProps } from './PageHeader';
import { propObj } from './PageHeader.props';

export default {
  title: 'Common/template/PageHeader',
  component: PageHeader,
} as ComponentMeta<typeof PageHeader>;

const Template: Story<PageHeaderProps> = (args) => <PageHeader {...args} />;

export const Default = Template.bind({});
Default.args = propObj.default;
