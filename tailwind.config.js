/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#70B959',
        'dark-green': '#5fa048',
        'text-dark': '#333333',
        'text-gray': '#666666',
        'bg-light': '#f7f7f7',
        'disclaimer-bg': '#f0f0f0',
      }
    },
  },
  plugins: [],
}