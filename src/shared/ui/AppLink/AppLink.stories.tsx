import { Meta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta = {
  title: 'shared/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;

    export const Primary = () => (
    <AppLink to={'/'} children={'Text'} theme={AppLinkTheme.PRIMARY} />
    );

    export const Secondary = () => (
    <AppLink to={'/'} children={'Text'} theme={AppLinkTheme.SECONDARY} />
    );

    export const PrimaryDark = () => (
        <AppLink to={'/'} children={'Text'} theme={AppLinkTheme.PRIMARY} />
    );
  
        PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
    export const SecondaryDark = () => (
        <AppLink to={'/'} children={'Text'} theme={AppLinkTheme.SECONDARY} />
    );
        SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];