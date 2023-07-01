import cls from './ArticleViewSelector.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleView } from 'entities/Article/model/types/article';
import ListIcon from 'shared/assets/icons/ListIcon.svg';
import TiledIcon from 'shared/assets/icons/TiledIcon.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TiledIcon,
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
];

export const ArticleViewSelector = memo(
    ({ className, view, onViewClick }: ArticleViewSelectorProps) => {
        const onClick = (newView: ArticleView) => {
            return () => {
                onViewClick?.(newView);
            };
        };

        return (
            <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
                {viewTypes.map((viewType) => (
                    <Button key={viewType.view} theme={ButtonTheme.CLEAR} onClick={onClick(viewType.view)}>
                        <Icon
                            Svg={viewType.icon}
                            className={classNames(cls.iconView, {
                                [cls.notSelected]: viewType.view !== view,
                            })}
                        />
                    </Button>
                ))}
            </div>
        );
    },
);
