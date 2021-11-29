module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        slPurple: {
          DEFAULT: "#5C5470",
          dark: "#352F44",
        },
        slWhite: {
          DEFAULT: "#F2F1F5",
        },
        slRed: {
          DEFAULT: "#FF1900",
        },
        slGreen: {
          DEFAULT: "#55DA50",
        },
        slBlue: {
          DEFAULT: "#1492E6",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
