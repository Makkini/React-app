import { Meta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import {ArticleDetailsPageHeader} from './ArticleDetailsPageHeader';

const meta: Meta = {
  title: 'pages/ArticleDetailsPageHeader',
  component: ArticleDetailsPageHeader,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;

export const Normal = () => (
  <ArticleDetailsPageHeader />
);
Normal.decorators = [StoreDecorator({})]