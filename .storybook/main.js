const path = require('path');
module.exports = {
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules.push(path.resolve(__dirname, '../src'));
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src'),
    };

    // Akira: remove svg from existing rule (defined by storybook's webpack config)
    config.module.rules = config.module.rules.map((rule) => {
      if (
        String(rule.test) ===
        String(
          // Akira: update this if storybook's webpack config changes in the future
          /\.(svg|ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
        )
      ) {
        return {
          ...rule,
          test: /\.(ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
        };
      }
      return rule;
    });

    // TODO: Akira: Use SVGR and asset SVG in the same project
    // ref: https://react-svgr.com/docs/webpack/#use-svgr-and-asset-svg-in-the-same-project
    // config.module.rules.push({
    //   type: 'asset',
    //   resourceQuery: /url/, // *.svg?url
    // });

    // Akira: use svgr for svg files
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  typescript: {
    reactDocgen: false,
  },
  docs: {
    autodocs: true,
  },
};
