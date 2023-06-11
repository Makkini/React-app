import { Meta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import MainPage from './MainPage';

const meta: Meta = {
  title: 'pages/MainPage',
  component: MainPage,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;

    export const Normal = () => (
        <MainPage/>
    );
     

    export const Dark = () => (
        <MainPage/>
    );
    Dark.decorators = [ThemeDecorator(Theme.DARK)];