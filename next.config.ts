import type { NextConfig } from 'next'

import path from 'path'

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    additionalData: `@use '@/styles/helpers' as *;`,
  },
  webpack: (config) => {
    const fileLoaderRule = config.module.rules.find(
      (rule: { test?: { test?: (arg: string) => boolean } }) => rule.test?.test?.('.svg'),
    )

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] },
        use: ['@svgr/webpack'],
      },
    )

    fileLoaderRule.exclude = /\.svg$/i

    return config
  },
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: [
            {
              loader: '@svgr/webpack',
              options: {
                svgProps: { className: 'icon' },
              },
            },
          ],
          as: '*.js',
        },
      },
    },
  },
}

export default nextConfig
