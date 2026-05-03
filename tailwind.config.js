/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-cormorant)', 'serif'],
        body: ['var(--font-jost)', 'sans-serif'],
        accent: ['var(--font-pinyon)', 'cursive'],
      },
      colors: {
        gold: {
          50:  '#fdf9ed',
          100: '#f9edcc',
          200: '#f3d98a',
          300: '#ecc048',
          400: '#e4a820',
          500: '#c98a10',
          600: '#a3690d',
          700: '#7d4d0f',
          800: '#683e12',
          900: '#5a3414',
        },
        earth: {
          50:  '#f9f5f0',
          100: '#f0e8da',
          200: '#dfd0b7',
          300: '#c9b18e',
          400: '#b39068',
          500: '#9e7750',
          600: '#886044',
          700: '#6f4c39',
          800: '#5c3f32',
          900: '#4e352c',
        },
        cream: '#faf7f2',
        dark: '#1a1208',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
}
