import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === 'production';
const isCustomDomain = process.env.NEXT_PUBLIC_CUSTOM_DOMAIN === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Only use basePath and assetPrefix for GitHub Pages (not custom domains)
  assetPrefix: isProduction && !isCustomDomain ? '' : '',
  basePath: isProduction && !isCustomDomain ? '' : '',
};

export default nextConfig;