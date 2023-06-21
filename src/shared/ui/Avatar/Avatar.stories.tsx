import { Meta } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarImg from './storybook.jpg'
const meta: Meta = {
  title: 'shared/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;

    export const Primary = () => (
        <Avatar size={150} src={AvatarImg}/>
    );

    export const Small = () => (
        <Avatar size={50} src={AvatarImg}/>
    );
