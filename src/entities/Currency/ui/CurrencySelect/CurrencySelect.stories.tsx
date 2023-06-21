import { Meta } from '@storybook/react';
import { CurrencySelect } from './CurrencySelect';
const meta: Meta = {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

export default meta;

export const Primary = () => <CurrencySelect />;
