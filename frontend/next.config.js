/** @type {import('next').NextConfig} */
const nextConfig = {
  extends: [
    'plugin:@next/next/recommended'
  ],
  reactStrictMode: true,
  compress: true,
  webpack (config, { webpack }) {
    const prod = process.env.NODE_ENV === 'production'
    const plugins = [...config.plugins]

    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    })

    return {
      ...config,
      mode: prod ? 'production' : 'development',
      devtool: prod ? 'hidden-source-map' : 'eval-source-map',
      plugins
    }
  }
}

module.exports = nextConfig
