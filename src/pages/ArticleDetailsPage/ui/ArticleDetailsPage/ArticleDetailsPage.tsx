import cls from './ArticleDetailsPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { CommentList } from 'entities/Comment';
import { Text, TextSize } from 'shared/ui/Text/Text';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    articleDetailsCommentsReducer,
    getArticleComments,
} from '../../model/slices/articleDetailsCommentsSlice';
import { useSelector } from 'react-redux';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentByArticleId/fetchCommentByArticleId';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/addCommentForm';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'widgets/Page/Page';
import {
    articleDetailsPageRecommendationsReducer,
    getArticleRecommendations,
} from '../../model/slices/articleDetailsPageRecommendationsSlice';
import { getArticleRecomendationsIsLoading } from '../../model/selectors/recommendations';
import { fetchArticleRecommendations } from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { VStack } from 'shared/ui/Stack';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article-details');
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const recommendations = useSelector(getArticleRecommendations.selectAll);

    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const recommendationsIsLoading = useSelector(getArticleRecomendationsIsLoading);

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text));
        },
        [dispatch],
    );

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });

    if (!id) {
        return (
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <VStack gap={'16'} max >
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id} />
                    <Text size={TextSize.L} className={cls.commentTitle} title={t('Рекомендуем')} />
                    <ArticleList
                        target={'_blank'}
                        className={cls.recommendations}
                        articles={recommendations}
                        isLoading={recommendationsIsLoading}
                    />
                    <Text size={TextSize.L} className={cls.commentTitle} title={t('Комментарии')} />
                    <AddCommentForm onSendComment={onSendComment} />
                    <CommentList isLoading={commentsIsLoading} comments={comments} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};
export default memo(ArticleDetailsPage);
