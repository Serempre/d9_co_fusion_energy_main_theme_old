const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './templates/**/*.{twig,html,tpl}',
    './sources/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        black: 'var(--color-black)',
        white: 'var(--color-white)',
        green: 'var(--color-green)',
        error: 'var(--color-error)',
        primary: {
          DEFAULT: 'var(--color-primary-500)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary-500)',
        },
      },
      fontFamily: {
        primary: [
          'var(--font-family-primary)',
          ...defaultTheme.fontFamily.sans
        ],
      },
      fontSize: {
        xs: 'var(--text-xs)',
        sm: 'var(--text-sm)',
        base: 'var(--text-base)',
        lg: 'var(--text-lg)',
        xl: 'var(--text-xl)',
        '2xl': 'var(--text-2xl)',
        '3xl': 'var(--text-3xl)',
        '4xl': 'var(--text-4xl)',
        '5xl': 'var(--text-5xl)',
        '6xl': 'var(--text-6xl)',
        '7xl': 'var(--text-7xl)',
        '8xl': 'var(--text-8xl)',
        '9xl': 'var(--text-8xl)',
        '10xl': 'var(--text-10xl)',
      },
    },
  },
  plugins: [],
};
