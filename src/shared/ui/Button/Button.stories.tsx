import { Meta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Button, ThemeButton } from './Button';

const meta: Meta = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;

export const Primary = () => (
    <Button>
      Text
    </Button>
  );

export const Clear = () => (
  <Button theme={ThemeButton.CLEAR}>
    Text
  </Button>
);


export const Outline = () => (
    <Button theme={ThemeButton.OUTLINE}>
      Text
    </Button>
  );


  export const OutlineDark = () => (
    <Button theme={ThemeButton.OUTLINE}>
      Text
    </Button>
  );
  OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]
