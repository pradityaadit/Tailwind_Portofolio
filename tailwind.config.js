/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        lora: ["Lora", "serif"],
        rubik: ["Rubik Wet Paint", "sans-serif"],
      },
    },
  },
  plugins: [],
};
