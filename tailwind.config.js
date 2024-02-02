import { nextui } from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],

  darkMode: 'class',

  theme: {
    fontFamily: {
      sans: ['var(--font-playfair-display-sc)'],
      mono: ['var(--font-montserrat)']
    },

    container: {
      center: true,
      padding: {
        DEFAULT: '24px',
        md: '0',
        lg: '0'
      }
    },

    colors: {
      transparent: '#0000',
      white: '#ffffff',
      black: '#000000',
      neutral: {
        100: '#f5f5f5',
        400: '#a7a7a7'
      },
      stone: {
        300: '#cacaca',
        500: '#a57e4d',
        900: '#1d1d1b'
      },
      orange: {
        200: '#f3d199'
      },
      teal: {
        900: '#1e5a46'
      },
      emerald: {
        950: '#013220'
      },
      zinc: {
        100: '#f4f4f5',
        300: '#d9d9d9',
        900: '#0f211c'
      }
    },

    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    }
  },

  backgroundImage: {
    'hero-buildings': "url('./public/page/home/hero-buildings.png')"
  },

  plugins: [
    // require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    nextui()
  ]
}
