/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          pathname: '/**',
        },
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '1337',
          pathname: '/uploads/**',
        },
      ],
    },
  };
  
export default nextConfig;
  