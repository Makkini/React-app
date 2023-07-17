import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
    framework: '@storybook/react-webpack5',
    stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        'storybook-addon-mock/register',
    ],
    docs: {
        autodocs: 'tag',
    },
};

export default config;
