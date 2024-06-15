/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter"],
      dmSerif: ["DM Serif Display"],
      dmSans: ["DM Sans"],
    },
    extend: {
      colors: {
        blue: "#003161",
        "text-blue": "#22608E",
        "blue-hover": "#0F4478",
        orange: "#E95B0A",
        cream: "#F6EEE1",
        "pastel-orange": "#E99944",
      },
      screens: {
        desktop: "1920px",
      },
    },
  },
  plugins: [],
};
