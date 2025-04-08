/** @type {import('next').NextConfig} */


const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  basePath: isProd ? '/skylerhawkins' : '',
  assetPrefix: isProd? '/skylerhawkins/' : '',
  images: {
    unoptimized: true,
  },
  compiler: {
    styledComponents: true, // Move this here
  },
};

export default nextConfig;
