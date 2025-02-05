import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        darkgray: '#3D3B40',
        primary: '#5CB8E4',
      },
      keyframes: {
        infiniteSlideOriginal: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-100%)' },
          '50.1%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        infiniteSlideCopy: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-200%)' },
        },
        infiniteSlide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        infiniteSlideOriginal: 'infiniteSlideOriginal 20s linear infinite',
        infiniteSlideCopy: 'infiniteSlideCopy 20s linear infinite',
        infiniteSlide: 'infiniteSlide 20s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
