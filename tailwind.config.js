/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'ui-sans-serif', 'sans-serif'],
      },
      colors: {
        gold: { DEFAULT: '#e8b93b', soft: '#f3ca5b', deep: '#a97c12' },
      },
    },
  },
  plugins: [],
};
