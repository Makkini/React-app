import { Meta } from '@storybook/react';
import { ListBox } from './ListBox';

const meta: Meta = {
    title: 'shared/ListBox',
    component: ListBox,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 100 }}>
                <Story />
            </div>
        ),
    ],
};

export default meta;

export const Normal = () => (
    <ListBox
        value="123"
        onChange={() => {}}
        items={[
            {
                content: '12312313',
                value: '123',
            },
            {
                content: '123133dasd',
                value: '1as23',
            },
        ]}
    />
);

export const topLeft = () => (
    <ListBox
        value="123"
        direction="top left"
        onChange={() => {}}
        items={[
            {
                content: '12312313',
                value: '123',
            },
            {
                content: '123133dasd',
                value: '1as23',
            },
        ]}
    />
);

export const topRight = () => (
    <ListBox
        value="123"
        direction="top right"
        onChange={() => {}}
        items={[
            {
                content: '12312313',
                value: '123',
            },
            {
                content: '123133dasd',
                value: '1as23',
            },
        ]}
    />
);

export const bottomRight = () => (
    <ListBox
        value="123"
        direction="bottom right"
        onChange={() => {}}
        items={[
            {
                content: '12312313',
                value: '123',
            },
            {
                content: '123133dasd',
                value: '1as23',
            },
        ]}
    />
);

export const bottomLeft = () => (
    <ListBox
        value="123"
        direction="bottom left"
        onChange={() => {}}
        items={[
            {
                content: '12312313',
                value: '123',
            },
            {
                content: '123133dasd',
                value: '1as23',
            },
        ]}
    />
);
