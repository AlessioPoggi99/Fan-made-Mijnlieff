const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  basePath: isProd ? '' : '',
  images: {
    unoptimized: true // Disable default image optimization
  }
}

export default nextConfig
