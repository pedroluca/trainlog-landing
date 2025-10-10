/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#27AE60',
          dark: '#1e8449',
          light: '#2ecc71',
        },
        premium: {
          from: '#F59E0B',
          to: '#D97706',
        },
        dark: {
          bg: '#1a1a1a',
          card: '#2a2a2a',
          lighter: '#3a3a3a',
        }
      },
      fontFamily: {
        sans: ['system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-premium': 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
        'gradient-dark': 'linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)',
      },
    },
  },
  plugins: [],
}
