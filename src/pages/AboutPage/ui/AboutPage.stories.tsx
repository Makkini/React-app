import { Meta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import AboutPage from './AboutPage';

const meta: Meta = {
  title: 'pages/AboutPage',
  component: AboutPage,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;

    export const Normal = () => (
        <AboutPage/>
    );
     

    export const Dark = () => (
        <AboutPage/>
    );
     Dark.decorators = [ThemeDecorator(Theme.DARK)]; 