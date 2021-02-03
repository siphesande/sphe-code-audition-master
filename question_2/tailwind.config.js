module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#6930C3",
        smartphome: "#8B5CD6",
        secondary: "#7B7B7B",
      },
      borderWidth: {
        "8": "8px",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#6930C3",
        secondary: "#ffed4a",
        danger: "#e3342f",
        footerbackgroundcolor: "rgba(105, 48, 195, 0.05)",
      }),
      fontFamily: {
        inter: ["Inter"],
      },
      lineHeight: {
        "extra-loose": "2.5",
        "extra-extra-loose": "7.25",
        "12": "3rem",
        "leading-nav": "58",
      },
      height: {
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "48px",
        xxl: "132px",
        nav: "101px",
      },
      width: {
        "88": "22rem"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const extendUnderline = {
        ".underline": {
          textDecoration: "underline",
          textDecorationColor: "rgba(105, 48, 195, 0.4)",
        },
      };

      addUtilities(extendUnderline);
    },
  ],
};
