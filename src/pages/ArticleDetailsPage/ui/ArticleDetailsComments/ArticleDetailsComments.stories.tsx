import { Meta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import {ArticleDetailsComments} from './ArticleDetailsComments';

const meta: Meta = {
  title: 'pages/ArticleDetailsComments',
  component: ArticleDetailsComments,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;

export const Normal = () => (
  <ArticleDetailsComments id={'1'} />
);
Normal.decorators = [StoreDecorator({})]