const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      }
    }
  },
  variants: {},
  plugins: [],
}
