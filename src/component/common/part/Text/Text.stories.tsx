import type { ComponentMeta, Story } from '@storybook/react';
import { Text, TextProps } from './';

export default {
  title: 'Common/part/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const ExtraSmall = Template.bind({});
ExtraSmall.args = { children: <span className='text-xs font-bold text-primary-700'>text-xs</span> };

export const Small = Template.bind({});
Small.args = { children: <span className='text-sm font-bold text-primary-700'>text-sm</span> };

export const Base = Template.bind({});
Base.args = { children: <span className='text-base font-bold text-primary-700'>text-base</span> };

export const Large = Template.bind({});
Large.args = { children: <span className='text-lg font-bold text-primary-700'>text-lg</span> };

export const ExtraLarge = Template.bind({});
ExtraLarge.args = { children: <span className='text-xl font-bold text-primary-700'>text-xl</span> };

export const ExtraLarge2 = Template.bind({});
ExtraLarge2.args = {
  children: <span className='text-2xl font-bold text-primary-700'>text-2xl</span>,
};

export const White = Template.bind({});
White.args = { children: <span className='font-bold text-white'>white</span> };

export const BlankCheckBox = Template.bind({});
BlankCheckBox.args = {
  children: (
    <div className='flex items-center gap-x-3'>
      <span className='h-4 w-4 border-2 border-primary-700 bg-white'></span>
      <span className='text-sm font-bold text-primary-700'>text-sm</span>
    </div>
  ),
};

export const FilledCheckBox = Template.bind({});
FilledCheckBox.args = {
  children: (
    <div className='flex items-center gap-x-3'>
      <div className='flex h-4 w-4 items-center  bg-primary-700 text-white'>
        <span>✓</span>
      </div>
      <span className='text-sm font-bold text-primary-700'>text-sm</span>
    </div>
  ),
};
