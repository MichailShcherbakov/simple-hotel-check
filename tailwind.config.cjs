/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "white": '#ffffff',
      "gray": {
        100: "#C9CACC",
        200: "#C4C4C4",
        300: "#BDBDBD",
        400: "#878787",
        500: "#424242",
        600: "#000000",
      },
      "green": {
        400: "#41522E",
      },
      "red": {
        300: "#EB1717",
        400: "#E55858",
      },
      "blue": {
        400: "#3877AF",
      },
    },
    extend: {
      spacing: {
        "2.5": "0.625rem",
        "4.5": "1.125rem",
      },
    },
  },
  plugins: [],
}