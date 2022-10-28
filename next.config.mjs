/** @type {import('next').NextConfig} */
import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';

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
    remarkPlugins: [
      remarkGfm,
    ],
    rehypePlugins: [
      rehypeSlug,
    ],
  },
})

// module.exports = withMDX({
//   nextConfig,
//   pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
// })

export default withMDX({
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
})