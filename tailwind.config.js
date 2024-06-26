/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/tw-elements/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#3f51b5",
      },
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
};
