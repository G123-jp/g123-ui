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

        // Akira: G123 Design System: Style&Layout
        // ref: https://www.figma.com/file/jbFjQ7abHxF8WybpmMBiGn/G123-Design-system?type=design&node-id=234-1546&mode=design&t=1kso8yJOWrA9umkH-0
        xxs: '0.25rem',
        '2xs': '0.25rem',
        xs: '0.5rem',
        sm: '0.75rem',
        md: '1rem',
        xl: '2rem',
        '2xl': '2.5rem',
        '3xl': '4rem',
        '4xl': '5rem',
      },
      // Akira: tailwind defualt colors + g123 palette
      colors: {
        transparent: 'transparent',
        current: 'currentColor',

        // Akira: 1.x palette, maybe DEPRECATED in the future
        primary: '#136c72',
        secondary: '#d9ede2',
        highlight: '#e3ff34',
        danger: '#ff385c',

        // Akira: 2.x palette, Backward Compatibility
        // Brand
        'brand-primary-base': '#e3ff34',
        'brand-primary-secondary': '#d2ef1c',
        'brand-primary-container': '#f1ff99',
        'brand-primary-bg': '#fafede',
        'brand-secondary-base': '#136c72',
        'brand-secondary-secondary': '#89b5b8',
        'brand-secondary-container': '#d9ede2',
        'brand-secondary-bg': '#eef6ef',
        'brand-tertiary-base': '#262626',
        'brand-tertiary-container': '#f0f0f0',
        // Font
        'font-primary': '#262626',
        'font-secondary': '#8c8c8c',
        'font-disabled': '#d9d9d9',
        'font-overlay': '#ffffff',
        // Link
        'link-default': '#136c72',
        'link-disabled': '#89b5b8',
        // Semantic - error
        'error-default': '#f6375a',
        'error-disabled': '#faaebb',
        'error-bg': '#fef2f5',
        // Semantic - info
        'info-default': '#fad511',
        'info-disabled': '#f9e681',
        'info-bg': '#fefbe9',
        // Semantic - success
        'success-default': '#61c630',
        'success-disabled': '#b7e2a1',
        'success-bg': '#f3faf0',
        // Surface
        'surface-primary': '#ffffff',
        'surface-secondary': '#fafafa',
        'surface-tertiary': '#f5f5f5',
        'surface-quaternary': '#f0f0f0',
        // Line
        'line-border': '#262626',
        'line-divider': '#f0f0f0',
      },
      animation: {
        'fade-in-bottom': 'fade-in-bottom 0.4s ease-out',
        'fade-out-bottom': 'fade-out-bottom 0.4s ease-out',
        'slide-in-bottom':
          'slide-in-bottom 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
        'slide-in-left': 'slide-in-left 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
      },
      keyframes: {
        'fade-in-bottom': {
          '0%': {
            opacity: 0,
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        'fade-out-bottom': {
          '0%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
          '100%': {
            opacity: 0,
            transform: 'translateY(10px)',
          },
        },
        'slide-in-bottom': {
          '0%': {
            opacity: 0,
            transform: 'translateY(100%)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        'slide-in-left': {
          '0%': {
            opacity: 0,
            transform: 'translateX(-100%)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
      },
      transitionProperty: {
        height: 'height',
      },
    },
  },
  // eslint-disable-next-line global-require, import/no-extraneous-dependencies
  plugins: [require('tailwind-scrollbar')],
};
