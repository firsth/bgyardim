/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#DE664D',
        secondary: '#FCFAE3',
        'dark-green': '#254539',
        dark: '#1C1C1C',
        gray: '#555555',
        'light-green': '#C1F1C6',
        navy: '#161C28',
        mint: '#54BD95',
      },
      fontFamily: {
        sans: ['SF Pro Display', 'system-ui', 'sans-serif'],
        display: ['SF Pro Display', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

