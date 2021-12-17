module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      outline: {
        red: "1px solid #FF1900",
        purple: "1px solid #5C5470",
      },
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
          dark: "#981A0C",
          light: "#FF9D92",
        },
        slGreen: {
          DEFAULT: "#55DA50",
          dark: "#207B1D",
        },
        slBlue: {
          DEFAULT: "#1492E6",
          dark: "#05588F",
          light: "#B4E1FF",
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
        "8/1": "100%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
