import path from 'path';
import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    entry: '',
    build: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    locales: '',
    buildLocales: ''
  };

  config.resolve!.modules!.push(paths.src);
  config.resolve!.extensions!.push('.ts', '.tsx');
  config.module!.rules!.push(buildCssLoader(true));

  if (config.module && config.module.rules) {
    config.module.rules = config.module.rules.map((rule: RuleSetRule | '...') => {
      if (rule !== '...') {
        if (/svg/.test(rule.test as string)) {
          return { ...rule, exclude: /.svg$/i };
        }
      }
      return rule;
    });
  }

  config.module!.rules?.push({
    test: /.svg$/,
    use: ['@svgr/webpack'],
  });

  config.plugins!.push(new DefinePlugin({
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify(''),
    __PROJECT__: JSON.stringify('storybook')
}))

  return config;
};
