import { Meta } from '@storybook/react';
import { CommentCard } from './CommentCard';

const meta: Meta = {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

export default meta;

export const Normal = () => (
    <CommentCard
        comment={{
            id: '1',
            text: 'hello world',
            user: { id: '1', username: 'mak' },
        }}
    />
);

export const Loading = () => (
    <CommentCard
        comment={{
            id: '1',
            text: 'hello world',
            user: { id: '1', username: 'mak' },
        }}
        isLoading={true}
    />
);
