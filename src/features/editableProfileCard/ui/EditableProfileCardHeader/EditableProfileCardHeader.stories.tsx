import { Meta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import {EditableProfileCardHeader} from './EditableProfileCardHeader';

const meta: Meta = {
  title: 'features/EditableProfileCardHeader',
  component: EditableProfileCardHeader,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;

export const Normal = () => (
  <EditableProfileCardHeader />
);
Normal.decorators = [StoreDecorator({})]