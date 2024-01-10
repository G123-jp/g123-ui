import '../src/global.css';
import ThemeModeWrapper from './ThemeModeWrapper';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story, context) => (
    // NOTE(Akira): Wrap all stories for connect our customized dark mode flag('g123-dar') with storybook-dark-mode
    <ThemeModeWrapper>
      <Story {...context} />
    </ThemeModeWrapper>
  ),
];
