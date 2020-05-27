const withImages = require('next-images')
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})

module.exports = withMDX(withImages({
  pageExtensions: ['tsx', 'mdx'],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(md|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });

    return config;
  },
  env: {
    NEXT_PUBLIC_VERCEL_URL: process.env.VERCEL_URL,
  },
}))