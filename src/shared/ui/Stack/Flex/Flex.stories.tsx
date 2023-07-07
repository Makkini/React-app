import { Meta } from '@storybook/react';
import { Flex } from './Flex';

const meta: Meta = {
    title: 'shared/Flex',
    component: Flex,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

export default meta;

export const Row = () => (
    <Flex
        children={
            <>
                <div>first</div>
                <div>first</div>
                <div>first</div>
                <div>first</div>
                <div>first</div>
            </>
        }
    />
);

export const RowGap4 = () => (
    <Flex
        gap={'4'}
        children={
            <>
                <div>first</div>
                <div>first</div>
                <div>first</div>
                <div>first</div>
                <div>first</div>
            </>
        }
    />
);

export const RowGap8 = () => (
    <Flex
        gap={'8'}
        children={
            <>
                <div>first</div>
                <div>first</div>
                <div>first</div>
                <div>first</div>
                <div>first</div>
            </>
        }
    />
);

export const RowGap16 = () => (
    <Flex
        gap={'16'}
        children={
            <>
                <div>first</div>
                <div>first</div>
                <div>first</div>
                <div>first</div>
                <div>first</div>
            </>
        }
    />
);

export const Column = () => (
    <Flex
        direction={'column'}
        children={
            <>
                <div>first</div>
                <div>first</div>
                <div>first</div>
                <div>first</div>
                <div>first</div>
            </>
        }
    />
);

export const Column16 = () => (
    <Flex
        gap={'16'}
        direction={'column'}
        children={
            <>
                <div>first</div>
                <div>first</div>
                <div>first</div>
                <div>first</div>
                <div>first</div>
            </>
        }
    />
);

export const ColumnAlignEnd = () => (
    <Flex
        align={'end'}
        direction={'column'}
        children={
            <>
                <div>first</div>
                <div>first</div>
                <div>first</div>
                <div>first</div>
                <div>first</div>
            </>
        }
    />
);
