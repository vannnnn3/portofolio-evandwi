/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const basePath = isProd ? '/portofolio-evandwi' : ''

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: isProd ? '/portofolio-evandwi/' : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  outputFileTracingRoot: __dirname,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  webpack: (config) => {
    config.externals.push('canvas', 'jsdom')
    return config
  },
}

module.exports = nextConfig
