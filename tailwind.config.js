const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ['./src/**/*.{mdx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      }
    }
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
}
