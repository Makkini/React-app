import cls from './ArticlesPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Article, ArticleList, ArticleView } from 'entities/Article';
interface ArticlesPageProps {
    className?: string;
    view?: ArticleView;
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className, view } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            <ArticleList view={ArticleView.BIG} articles={[]} />
        </div>
    );
};

export default memo(ArticlesPage);
