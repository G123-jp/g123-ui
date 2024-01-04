module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  'prettier.tabWidth': 2,
  'prettier.useTabs': false,
  // eslint-disable-next-line global-require, import/no-extraneous-dependencies
  plugins: [require('prettier-plugin-tailwindcss')],
};
