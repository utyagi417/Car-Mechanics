/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"], 
        Neue: ["Bebas Neue", "sans-serif"], 
        Comfortaa: ["Comfortaa", "sans-serif"], 
        Ubuntu: ["Ubuntu", "sans-serif"], 
        Montserrat: ["Montserrat", "sans-serif"], 
        Orbitron:["Orbitron"],
        Bai: ["Bai Jamjuree"],
        Plus: ["Plus Jakarta Sans"]
      }
    },
    screens: {
      'xxs': "320px",
      'xs': "375px",
      "ss": "425px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "wd": "1340px",
      "xw":"1440px",
      "2xl": "1536px"
    },
  },
  plugins: [require("daisyui")],
}