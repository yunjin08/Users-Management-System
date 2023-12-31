/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "868px",
        md: "1160px",
        lg: "1200px",
        xl: "1700px",
      },
      colors: {
        primary: "#020617",
      },
      fontFamily: {
        roboto: ["Roboto", "sans"],
      },
    },
  },
  plugins: [],
};
