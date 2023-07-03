import { Meta } from '@storybook/react';
import { Tabs } from './Tabs';
import { action } from '@storybook/addon-actions';

const meta: Meta = {
    title: 'shared/Tabs',
    component: Tabs,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

export default meta;

export const Normal = () => (
    <Tabs
        tabs={[
            {
                value: 'tab 1',
                content: 'tab 1',
            },
            {
                value: 'tab 2',
                content: 'tab 2',
            },
            {
                value: 'tab 3',
                content: 'tab 3',
            },
        ]}
        value={'tab 2'}
        onTabClick={action('onTabClick')}
    />
);
