/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-bonek-1": "#3E7741",
        "green-bonek-2": "#1AB323",
        "gray-bonek": "#D2D2D2",
        "blue-bonek": "#147DE8"
      }
    },
  },
  plugins: [],
}

