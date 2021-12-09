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
          dark: "#CCCCCC",
        },
        slRed: {
          DEFAULT: "#FF1900",
        },
        slGreen: {
          DEFAULT: "#55DA50",
          dark: "#207B1D",
        },
        slBlue: {
          DEFAULT: "#1492E6",
          dark: "#05588F",
        },
        slCyan: {
          DEFAULT: "#0DCAF0",
          dark: "#0B839B",
        },
        slGray: {
          DEFAULT: "#707070",
        },
      },
      spacing: {
        497: "480px",
        296: "294px",
        90: "22rem",
        802: "2px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
