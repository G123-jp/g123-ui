import tailwindConfig from './tailwind.config.js';

// NOTE(Akira): Customized dark mode flag
// ref: https://tailwindcss.com/docs/dark-mode#customizing-the-class-name
tailwindConfig.darkMode = ['class', '[data-mode="g123-dark"]'];
// NOTE(Akira): cover components which stand for storybook
tailwindConfig.content = [...tailwindConfig.content, './.storybook/**/*.tsx'];

// Export the modified configuration
export default tailwindConfig;
