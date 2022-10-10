/** @type {import('next').NextConfig} */
import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['zh', 'en' ],
    defaultLocale: 'zh',
    localeDetection: false
  }
}

// const withMDX = require('@next/mdx')({
//   extension: /\.mdx?$/,
//   options: {
//     providerImportSource: '@mdx-js/react',
//     remarkPlugins: [remarkGfm],
//     rehypePlugins: [],
//   },
// })

const withMDX = nextMDX({
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['zh', 'en' ],
    defaultLocale: 'zh',
    localeDetection: false
  },
  extension: /\.mdx?$/,
  options: {
    providerImportSource: '@mdx-js/react',
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
})

// module.exports = withMDX({
//   nextConfig,
//   pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
// })

export default withMDX({
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
})