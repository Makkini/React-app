import { Meta } from '@storybook/react';
import { Code } from './Code';

const meta: Meta = {
    title: 'pages/Code',
    component: Code,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

export default meta;

export const Normal = () => <Code text={'import { Meta } from "@storybook/react"}'} />;
