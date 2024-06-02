/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter"],
      dmSerif: ["DM Serif Display"],
    },
    extend: {
      colors: {
        blue: "#003161",
        "text-blue": "#22608E",
        orange: "#E95B0A",
      },
    },
  },
  plugins: [],
};
