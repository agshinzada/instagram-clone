/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "logo-pattern":
          "url(https://static.cdninstagram.com/rsrc.php/v3/y4/r/ItTndlZM2n2.png)",
      },
      colors: {
        brand: "#0095f6",
        facebook: "#385185",
      },
    },
  },
  plugins: [],
};
