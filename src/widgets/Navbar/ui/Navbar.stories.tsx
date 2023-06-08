import { Meta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
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

export const Dark = () => <Navbar />;
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
