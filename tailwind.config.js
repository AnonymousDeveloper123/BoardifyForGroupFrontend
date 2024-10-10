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
      fontFamily: {
        inter: ['"Inter"', 'sans-serif'],
      },
      colors: {
        primary: '#114D72',
        'board-bg':"#F7F8F6",
        'bg-secondary': '#F0F0F0',
        active: "#0EAFFF",
        "todo": "#45F0FC",
        "in-progress": "#FF69B4",
        "completed": "#45F0FC"
      },
    },
  },
  plugins: [flowbite.plugin()],
}
