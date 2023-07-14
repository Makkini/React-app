import { Meta } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Skeleton } from './Skeleton';

const meta: Meta = {
    title: 'shared/Skeleton',
    component: Skeleton,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

export default meta;

export const Normal = () => <Skeleton width={'100%'} height={200} />;

export const Circle = () => <Skeleton border={'50%'} width={100} height={100} />;

export const NormalDark = () => <Skeleton width={'100%'} height={200} />;
NormalDark.decorators = [ThemeDecorator(Theme.DARK)]

export const CircleDark = () => <Skeleton border={'50%'} width={100} height={100} />;
CircleDark.decorators = [ThemeDecorator(Theme.DARK)]