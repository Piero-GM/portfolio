/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/portfolio" : "",
  assetPrefix: isProd ? "/portfolio/" : "",
  pageExtensions: ['jsx', 'js'],
  webpack: (config) => {
    config.resolve.modules.push(__dirname);
    return config;
  },
};

module.exports = nextConfig;
