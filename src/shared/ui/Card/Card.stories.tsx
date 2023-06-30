import { Meta } from '@storybook/react';
import { Text } from '../Text/Text';
import {Card} from './Card';

const meta: Meta = {
  title: 'pages/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;

export const Normal = () => (
  <Card  children={<Text title={'Text'} text={'text text'}/>}/>
);