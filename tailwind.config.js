/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      bgColor: "#2b2f2d",
      main:"#ab9b71",
      second:"#fff",
      highlight:"#00d6e9",
      correct:"#0b6623",
      wrong:"#c70202",
    },
  },
  plugins: [],
}