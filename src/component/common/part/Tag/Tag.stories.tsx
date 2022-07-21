import type { ComponentMeta, Story } from '@storybook/react';
import { Tag, TagProps } from './';

export default {
  title: 'Common/part/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: Story<TagProps> = (args) => <Tag {...args} />;

export const Green = Template.bind({});
Green.args = { children: <span className='tag bg-primary-700'>tag-green</span> };

export const Pink = Template.bind({});
Pink.args = { children: <span className='tag bg-pink-700'>tag-pink</span> };
