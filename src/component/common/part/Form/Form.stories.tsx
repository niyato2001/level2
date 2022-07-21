import type { ComponentMeta, Story } from '@storybook/react';
import { Form, FormProps } from './';

export default {
  title: 'Common/part/Form',
  component: Form,
} as ComponentMeta<typeof Form>;

const Template: Story<FormProps> = (args) => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <form>
      <input className='form' type='text' />
    </form>
  ),
};
