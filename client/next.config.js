// const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  basePath: '/', // Replace with your actual GitHub repository name
  assetPrefix: '/', // Ensure assets are correctly prefixed
  images: {
    unoptimized: true // Disable default image optimization
  }
}

export default nextConfig
