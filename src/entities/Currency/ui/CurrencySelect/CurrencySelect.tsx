import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from '../../model/types/currency';
import { memo, useCallback } from 'react';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency)=> void
    readonly?: boolean
}
const options = [
    {value: Currency.USD, content: Currency.USD},
    {value: Currency.RUB, content: Currency.RUB},
    {value: Currency.EUR, content: Currency.EUR},
]

export const CurrencySelect = memo(({ className, value, onChange, readonly}: CurrencySelectProps) => {
    const {t} = useTranslation();

    const onChangeHandler = useCallback((value: string)=>{
        onChange?.(value as Currency)
    }, [onChange])

    return (
        <Select
        label={t('Укажите валюту')!}
        options={options}
        value={value}
        onChange={onChangeHandler}
        readonly={readonly}
         />

    );
});