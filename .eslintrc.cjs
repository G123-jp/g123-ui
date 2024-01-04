module.exports = {
  extends: [
    '@g123jp/eslint-config-react',
    'prettier',
    'plugin:tailwindcss/recommended',
  ],
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
    'import-helpers',
    'tailwindcss',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    tailwindcss: {
      config: 'src/tailwind.config.js',
      removeDuplicates: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
};
