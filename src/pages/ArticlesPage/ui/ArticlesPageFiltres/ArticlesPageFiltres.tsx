import {
    ArticleSortField,
    ArticleSortSelector,
    ArticleType,
    ArticleTypeTabs,
    ArticleViewSelector,
} from '@/entities/Article';
import { ArticleView } from '@/entities/Article/model/consts/articleConsts';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { SortOrder } from '@/shared/types';
import { Card } from '@/shared/ui/Card/Card';
import { Input } from '@/shared/ui/Input/Input';
import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../model/slices/articlesPageSlice';
import cls from './ArticlesPageFiltres.module.scss';
interface ArticlesPageFiltresProps {
    className?: string;
}

export const ArticlesPageFiltres = memo(({ className }: ArticlesPageFiltresProps) => {
    const { t } = useTranslation('article-details');
    const view = useSelector(getArticlesPageView);
    const dispatch = useAppDispatch();
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);
    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlesPageActions.setView(view));
            fetchData();
        },
        [dispatch, fetchData],
    );

    const onChangeSort = useCallback(
        (newSort: ArticleSortField) => {
            dispatch(articlesPageActions.setSort(newSort));
            dispatch(articlesPageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );

    const onChangeOrder = useCallback(
        (newOrder: SortOrder) => {
            dispatch(articlesPageActions.setOrder(newOrder));
            dispatch(articlesPageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );

    const onChangeSearch = useCallback(
        (search: string) => {
            dispatch(articlesPageActions.setSearch(search));
            dispatch(articlesPageActions.setPage(1));
            debouncedFetchData();
        },
        [dispatch, fetchData],
    );

    const onChangeType = useCallback(
        (value: ArticleType) => {
            dispatch(articlesPageActions.setType(value));
            dispatch(articlesPageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );

    return (
        <div className={classNames(cls.ArticlesPageFiltres, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={cls.search}>
                <Input onChange={onChangeSearch} value={search} placeholder={t('Поиск')!} />
            </Card>
            <ArticleTypeTabs className={cls.tabs} value={type} onChangeType={onChangeType} />
        </div>
    );
});
