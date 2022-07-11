const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#5F63F2",
      primaryLight: "#5F63F270",
      ...colors,
    },
  },
  plugins: [],
};
