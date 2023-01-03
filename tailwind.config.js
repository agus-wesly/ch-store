/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-epilogue)"],
      },
      colors: {
        primary: {
          DEFAULT: "#623CEA",
          dark: "#382285",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
