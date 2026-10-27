/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0F1115',
        body: '#374151',
        muted: '#9CA3AF',
        line: '#E5E7EB',
        amber: {
          DEFAULT: '#E3B341',
          dark: '#D9A441',
          soft: '#F5D585',
        },
        night: {
          950: '#0B0B0C',
          900: '#111113',
          850: '#151517',
          800: '#1C1C1F',
          700: '#2A2A2E',
        },
        teal: '#10B981',
        brand: '#3B82F6',
        grape: {
          DEFAULT: '#7C3AED',
          light: '#A855F7',
        },
        danger: '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['10px', '14px'],
      },
      borderRadius: {
        card: '14px',
      },
    },
  },
  plugins: [],
}
