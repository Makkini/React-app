import { Meta } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';

const meta: Meta = {
  title: 'shared/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;

export const Normal = () => (
  <Modal
  isOpen={true}
    children="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam tempora iste fugiat
inventore dignissimos, minima distinctio recusandae vel blanditiis suscipit nisi, officia
odit quia unde laborum, autem molestiae quod officiis."
  />
);

export const Dark = () => (
    <Modal
    isOpen={true}
      children="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam tempora iste fugiat
  inventore dignissimos, minima distinctio recusandae vel blanditiis suscipit nisi, officia
  odit quia unde laborum, autem molestiae quod officiis."
    />
  );
  Dark.decorators = [ThemeDecorator(Theme.DARK)];