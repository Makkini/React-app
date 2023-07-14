import { Meta } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Navbar } from './Navbar';

const meta: Meta = {
  title: 'widget/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;

export const Normal = () => <Navbar />;
Normal.args = {};
Normal.decorators = [StoreDecorator({

})]

export const Dark = () => <Navbar />;
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];


export const AuthNavbar = () => <Navbar />;
AuthNavbar.args = {};
AuthNavbar.decorators = [StoreDecorator({
    user: {authData:{}}
})]