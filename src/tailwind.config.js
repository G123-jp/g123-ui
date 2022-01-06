// FIXME: Akira
// .js for tailwind CLI(https://github.com/muhammadsammy/tailwindcss-classnames#using-the-cli)
// which require a commonjs module.
// .ts for rollup to compile tailwind.config and export it.
// both of their's content are duplicated.

module.exports = {
  content: ['./src/components/**/*.tsx'],
  theme: {
    fontFamily: {
      sans: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        'sans-serif',
      ],
      serif: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        'serif',
      ],
      primary: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto'],
      secondary: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
      ],
    },
    fontSize: {
      xxs: '0.625rem', // Akira: support font-size: 10px(0.625rem)
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },
    extend: {
      // Akira: ref: https://tailwindcss.com/docs/customizing-spacing
      spacing: {
        15: '3.75rem',
      },
      // Akira: tailwind defualt colors + g123 pallate
      colors: {
        primary: '#136c72',
        secondary: '#d9ede2',
        highlight: '#e3ff34',
        danger: '#ff385c',
      },
    },
  },
  // Akira: FIXME: should be removed, ref: https://tailwindcss.com/docs/upgrade-guide#remove-variant-configuration
  // currently seems be depenented by tailwindcss-classnames.
  variants: {
    extend: {
      margin: ['first', 'last'],
    },
  },
  plugins: [],
};
