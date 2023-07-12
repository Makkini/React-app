import { Meta } from '@storybook/react';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';

const meta: Meta = {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

export default meta;

export const Normal = () => <ArticleRecommendationsList />;
