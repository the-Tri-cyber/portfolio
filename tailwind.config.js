/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: 'rgb(18, 172, 219)',
        secondary: '#64748b',
        dark: '#0f172a',
      },
      screens: {
        'xl': '1420px',
      },
    },
  },
  plugins: [],
}

