import { Meta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Button, ButtonSize, ButtonTheme } from './Button';

const meta: Meta = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;

export const Primary = () => <Button>Text</Button>;

export const Clear = () => <Button theme={ButtonTheme.CLEAR}>Text</Button>;

export const ClearInverted = () => <Button theme={ButtonTheme.CLEAR_INVERTED}>Text</Button>;

export const Outline = () => <Button theme={ButtonTheme.OUTLINE}>Text</Button>;

export const OutlineSizeL = () => (
  <Button size={ButtonSize.L} theme={ButtonTheme.OUTLINE}>
    Text
  </Button>
);

export const OutlineSizeXL = () => (
  <Button size={ButtonSize.XL} theme={ButtonTheme.OUTLINE}>
    Text
  </Button>
);

export const OutlineDark = () => <Button theme={ButtonTheme.OUTLINE}>Text</Button>;
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundTheme = () => <Button theme={ButtonTheme.BACKGROUND}>Text</Button>;

export const BackgroundInverted = () => (
  <Button theme={ButtonTheme.BACKGROUND_INVERTED}>Text</Button>
);

export const Square = () => (
  <Button size={ButtonSize.M} square={true} theme={ButtonTheme.BACKGROUND_INVERTED}>
    {'>'}
  </Button>
);

export const SquareSizeL = () => (
  <Button size={ButtonSize.L} square={true} theme={ButtonTheme.BACKGROUND_INVERTED}>
    {'>'}
  </Button>
);

export const SquareSizeXL = () => (
  <Button size={ButtonSize.XL} square={true} theme={ButtonTheme.BACKGROUND_INVERTED}>
    {'>'}
  </Button>
);
