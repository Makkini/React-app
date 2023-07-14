import { Meta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import {EditableProfileCard} from './EditableProfileCard';

const meta: Meta = {
  title: 'pages/EditableProfileCard',
  component: EditableProfileCard,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;

export const Normal = () => (
  <EditableProfileCard id={'1'} />
);
Normal.decorators = [StoreDecorator({})]