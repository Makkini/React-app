import { Meta } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextSize, TextTheme } from './Text';

const meta: Meta = {
    title: 'shared/Text',
    component: Text,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

export default meta;

export const Primary = () => (
    <Text title={'Title 123& lorem'} text={'Description 123& DESCRIPTION'} />
);

export const Error = () => (
    <Text
        theme={TextTheme.ERROR}
        title={'Title 123& lorem'}
        text={'Description 123& DESCRIPTION'}
    />
);

export const onlyTitle = () => <Text title={'Title 123& lorem'} />;

export const onlyText = () => <Text text={'Description 123& DESCRIPTION'} />;

export const PrimaryDark = () => (
    <Text title={'Title 123& lorem'} text={'Description 123& DESCRIPTION'} />
);
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = () => <Text title={'Title 123& lorem'} />;
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = () => <Text text={'Description 123& DESCRIPTION'} />;
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = () => (
    <Text title={'Title 123& lorem'} text={'Description 123& DESCRIPTION'} size={TextSize.L} />
);

export const SizeM = () => (
    <Text title={'Title 123& lorem'} text={'Description 123& DESCRIPTION'} size={TextSize.M} />
);

export const SizeS = () => (
    <Text title={'Title 123& lorem'} text={'Description 123& DESCRIPTION'} size={TextSize.S} />
);

