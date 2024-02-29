/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backColor: "#141a27",
        mainColor: "#222f45",
      },
    },
  },
  plugins: [],
};
