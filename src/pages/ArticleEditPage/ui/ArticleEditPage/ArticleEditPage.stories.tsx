import { Meta } from '@storybook/react';
import ArticleEditPage from './ArticleEditPage';

const meta: Meta = {
  title: 'pages/ArticleEditPage',
  component: ArticleEditPage,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;

export const Normal = () => (
  <ArticleEditPage />
);