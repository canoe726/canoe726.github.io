/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  extends: [
    'plugin:@next/next/recommended'
  ],
  trailingSlash: true,
  reactStrictMode: true,
  compress: true,
  webpack (config, { webpack }) {
    const plugins = [...config.plugins]
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    })

    return {
      ...config,
      mode: isProd ? 'production' : 'development',
      devtool: isProd ? 'hidden-source-map' : 'eval-source-map',
      plugins
    }
  }
}

module.exports = nextConfig
