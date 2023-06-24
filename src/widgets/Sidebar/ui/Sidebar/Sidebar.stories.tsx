import { Meta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
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
Light.decorators = [ StoreDecorator({
    user: {authData: {}}
})];

export const Dark = () => <Sidebar />;
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    user: {authData: {}}
})];

export const NoAuth = () => <Sidebar />;
NoAuth.args = {};
NoAuth.decorators = [ StoreDecorator({
    user: {}
})];