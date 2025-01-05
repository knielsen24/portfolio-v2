/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ENABLE_EXPERIENCE: process.env.NEXT_PUBLIC_ENABLE_EXPERIENCE_PAGE,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/knielsen24/**',
      },
      {
        protocol: 'https',
        hostname: 'preview.redd.it',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
