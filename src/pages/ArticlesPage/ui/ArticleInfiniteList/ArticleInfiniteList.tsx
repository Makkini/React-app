import { ArticleList } from 'entities/Article';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { getArticles } from '../../model/slices/articlesPageSlice';
import cls from './ArticleInfiniteList.module.scss';
interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = memo(({ className }: ArticleInfiniteListProps) => {
    const { t } = useTranslation();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);

    const [searchParams] = useSearchParams();

    if (error) {
        return <Text title={t('Страница не найдена')} />;
    }

    return (
        <div className={classNames(cls.ArticleInfiniteList, {}, [className])}>
            <ArticleList
                className={className}
                isLoading={isLoading}
                view={view}
                articles={articles}
            />
        </div>
    );
});
