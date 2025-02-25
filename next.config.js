/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: "/portfolio",
  assetPrefix: "/portfolio/",
  pageExtensions: ['jsx', 'js'],
  webpack: (config) => {
    config.resolve.modules.push(__dirname);
    return config;
  },
};

module.exports = nextConfig;
