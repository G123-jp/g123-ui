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
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#136c72',
        secondary: '#d9ede2',
        highlight: '#e3ff34',
        danger: '#ff385c',
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
  plugins: [],
};
