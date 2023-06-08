import { Meta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Sidebar } from './Sidebar';

const meta: Meta = {
  title: 'widget/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  }, 
};

export default meta;

export const Light = () => <Sidebar />;
Light.args = {};

export const Dark = () => <Sidebar />;
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
