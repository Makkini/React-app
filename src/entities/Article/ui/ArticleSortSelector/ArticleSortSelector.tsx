import cls from './ArticleSortSelector.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useMemo } from 'react';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { ArticleSortField } from '../../model/types/article';
import { SortOrder } from 'shared/types';
interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo(
    ({ className, onChangeOrder, onChangeSort, order, sort }: ArticleSortSelectorProps) => {
        const { t } = useTranslation();

        const orderOptions = useMemo<SelectOption<SortOrder>[]>(
            () => [
                {
                    value: 'asc',
                    content: t('Возрастанию'),
                },
                {
                    value: 'desc',
                    content: t('Убыванию'),
                },
            ],
            [t],
        );

        const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
            () => [
                {
                    value: ArticleSortField.CREATED,
                    content: t('Дате создания'),
                },
                {
                    value: ArticleSortField.TITLE,
                    content: t('Названию'),
                },
                {
                    value: ArticleSortField.VIEWS,
                    content: t('Просмотрам'),
                },
            ],
            [t],
        );
        return (
            <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
                <Select
                    onChange={onChangeSort}
                    value={sort}
                    options={sortFieldOptions}
                    label={t('Сортировать по')!}
                />
                <Select
                    onChange={onChangeOrder}
                    value={order}
                    options={orderOptions}
                    label={t('по')!}
                    className={cls.order}
                />
            </div>
        );
    },
);
