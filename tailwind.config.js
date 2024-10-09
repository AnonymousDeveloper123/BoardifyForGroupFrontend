/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#114D72',
        'bg-secondary': '#F0F0F0',
        active: "#0EAFFF"
      },
    },
  },
  plugins: [],
}
