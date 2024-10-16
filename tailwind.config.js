/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'pink': '#D90368',
        'yellow': '#FFD400',
        "gray": "#EADEDA",
        "white": "#ffffff",
        "pinkPale": "#fff3f8",
        "pinkDark": "#b70459",
        "blackDark": "#292929",
        "blue": "#2f4f75",
        "purple": "#4e4f8c",
      },
    },
  },
  plugins: [],
}

