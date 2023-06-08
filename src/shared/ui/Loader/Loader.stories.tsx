import { Meta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Loader } from './Loader';

const meta: Meta = {
  title: 'shared/Loader',
  component: Loader,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;

    export const Normal = () => (
        <Loader/>
    );
     

    export const Dark = () => (
        <Loader/>
    );
     Dark.decorators = [ThemeDecorator(Theme.DARK)];