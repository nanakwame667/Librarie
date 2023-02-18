/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#F02B37",
      black: "#404040",
      white: "#ffff",
      title: "#717171",
      innerText: "#9B9B9B",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
