/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backColor: "#141a27",
        mainColor: "#222f45",
      },
      animation: {
        extend: "extend 0.4s ease-in-out forwards",
        shrink: "shrink 0.4s ease-in-out forwards",
        shrinkNavbar: "shrinkNavbar 0.1s ease-in-out forwards",
        extendNavbar: "extendNavbar 0.1s ease-in-out forwards",
        wiggle: "wiggle 1s ease-in-out forwards",
        fadeIn: 'fadeIn 0.5s ease-in-out forwards'
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        shrink: {
          "0%": { width: '15rem' },
          "100%": { width: '10rem' },
        },
        shrinkNavbar: {
          "0%": { width: '15rem',  },
          "100%": { width: '3rem' },
        },
        extendNavbar: {
          "0%": { width: '3rem',  },
          "100%": { width: '15rem' },
        },
        extend: {
          "0%": { width: '10rem' },
          "100%": { width: '15rem' },
        },
        fadeIn: {
          "0%": { opacity: '0' },
          "100%" : { opacity: '100%' }
        }
      },
    },
  },

  plugins: [],
};
