/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      bgColor: "#fbf3ee",
      main:"#1a20ca",
      second:"#1a20ca",
      highlight:"#025b53",
      correct:"#c70202",
    },
  },
  plugins: [],
}