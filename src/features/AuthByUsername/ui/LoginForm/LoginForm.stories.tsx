import { Meta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
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
Primary.decorators = [StoreDecorator({
    loginForm: {username: 'Makkinni', password: "Kaguya"}
})]

export const withError = () => <LoginForm/>
withError.decorators = [StoreDecorator({
    loginForm: {username: 'Makkinni', password: "Kaguya", error: "incorrect"}
})]

export const Loading = () => <LoginForm/>
Loading.decorators = [StoreDecorator({
    loginForm: {isLoading: true}
})]
