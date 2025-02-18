import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    additionalData: `@use '@/styles/helpers' as *;`,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

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
                icon: '1em',
                svgoConfig: {
                  plugins: [
                    {
                      name: 'convertColors',
                      params: { currentColor: true },
                    },
                  ],
                },
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
