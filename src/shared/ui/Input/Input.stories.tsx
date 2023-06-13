import { Meta } from '@storybook/react';
import { Input } from './Input';



const meta: Meta = {
  title: 'shared/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;

export const Primary = () => <Input placeholder={"Type text"} value={"123123"}/>
