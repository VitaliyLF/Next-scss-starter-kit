import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    additionalData: `@use '@/styles/helpers' as *;`,
  },
}

export default nextConfig
