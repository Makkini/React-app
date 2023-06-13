import { Meta } from '@storybook/react';
import { LoginForm } from './LoginForm';



const meta: Meta = {
  title: 'features/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;

export const Primary = () => <LoginForm/>
