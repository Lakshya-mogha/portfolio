/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'Oswald':['Oswald','sans-serif'],
        'Lora':['Lora','sans-serif'],
        'Inter':['inter','sans-serif'],
        'Devanagri':['Noto Serif Devanagari','sans-serif'],
      }
    },
  },
  plugins: [require("daisyui")],
}