const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ['./layouts/**/*.tsx', './pages/**/*.tsx', 'pages/**/*.mdx', 'layouts/*'],
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
