import { EntityState } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';
import { ArticleSortField, ArticleType } from 'entities/Article';
import { ArticleView } from 'entities/Article/model/consts/articleConsts';
import { SortOrder } from 'shared/types';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;

    // pagination
    page: number;
    limit?: number;
    hasMore: boolean;
    //filtres
    order: SortOrder;
    view: ArticleView;
    sort: ArticleSortField;
    search: string;
    type: ArticleType
    _inited: boolean;
}
