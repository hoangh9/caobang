import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Removed for server-side rendering with next-intl
  distDir: 'out',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'agenciatopo.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ext.same-assets.com',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default withNextIntl(nextConfig);