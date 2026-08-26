/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  basePath: "/aurela-gjoka-portfolio",
  assetPrefix: "/aurela-gjoka-portfolio/",

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },
};

export default nextConfig;