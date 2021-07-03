const withImages = require('next-images')
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})

module.exports = withMDX(
  withImages({
    pageExtensions: ['ts', 'tsx', 'mdx'],
  }),
)