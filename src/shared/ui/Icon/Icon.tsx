import cls from './Icon.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
interface IconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean
}

export const Icon = memo(({ className, Svg, inverted }: IconProps) => {
    return (
        <Svg className={classNames(inverted ? cls.inverted : cls.icon, {}, [className])}/>
    );
}); 