import { Meta } from '@storybook/react';
import { Select } from './Select';
import AvatarImg from './storybook.jpg';
const meta: Meta = {
    title: 'shared/Select',
    component: Select,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

export default meta;

export const Primary = () => (
    <Select
        label={'Укажите значение'}
        options={[
            { value: '123', content: 'First' },
            { value: '123', content: 'Second' },
        ]}
    />
);
