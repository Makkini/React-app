import { Meta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { CommentList } from './CommentList';

const meta: Meta = {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

export default meta;

export const Normal = () => (
    <CommentList
        comments={[
            {
                id: '1',
                text: 'hello world',
                user: { id: '1', username: 'mak' },
            },
            {
                id: '2',
                text: 'Comment two',
                user: { id: '1', username: 'fin' },
            },
        ]}
    />
);

export const Loading = () => <CommentList comments={[]} isLoading={true} />;
