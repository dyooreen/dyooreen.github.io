/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: "200px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      gridTemplateRows: {
        "layout-mobile": "9rem calc(100vh - 10.5rem)",
        "layout-laptop": "9rem calc(100vh - 9rem)",
      },
      fontFamily: {
        "fredoka-one": ['"Fredoka One"', "cursive"],
        roboto: ['"Roboto"', "sans-serif"],
      },
      backgroundColor: {
        violet: "#6c71c4",
      },
      boxShadow: {
        card: "inset 0px 0px 5px 3px #011a21",
      },
      borderColor: {
        violet: "rgba(89, 94, 173, 1)",
      },
      textColor: {
        base3: "#fdf6e3",
        magenta: "#2aa198",
      },
    },
  },
  plugins: [],
};
