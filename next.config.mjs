/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',

  basePath: isProduction ? '/aurela-gjoka-portfolio' : '',
  assetPrefix: isProduction ? '/aurela-gjoka-portfolio/' : '',

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },
};

export default nextConfig;