/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content()
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
  plugins: [flowbite.plugin()],
}
