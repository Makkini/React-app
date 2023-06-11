import { Meta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { PageError } from './PageError';

const meta: Meta = {
  title: 'widget/PageError',
  component: PageError,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;

export const Light = () => <PageError />;
Light.args = {};

export const Dark = () => <PageError />;
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
