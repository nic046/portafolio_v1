/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        Pixelify: ["Pixelify Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}

