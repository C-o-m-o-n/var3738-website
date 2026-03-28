/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/var3738/:path*',
        destination: `${process.env.API_URL}/:path*`
      }
    ]
  },
}

export default nextConfig
