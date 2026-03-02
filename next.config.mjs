/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn-domain.com',
        port: '',
        pathname: '/**',
      },
      {
        // Allow any HTTPS image domain for CDN flexibility
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
