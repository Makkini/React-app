import { Meta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import ProfilePage from './ProfilePage';

const meta: Meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;

    export const Normal = () => (
        <ProfilePage/>
    );
    Normal.decorators = [StoreDecorator({})];
     

    export const Dark = () => (
        <ProfilePage/>
    );
    Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];