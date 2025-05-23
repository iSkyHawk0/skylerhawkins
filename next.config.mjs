/** @type {import('next').NextConfig} */


const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  basePath: isProd ? '/skylerhawkins' : '',
  assetPrefix: isProd? '/skylerhawkins/' : '',
  trailingSlash: isProd ? true : false,
  images: {
    unoptimized: true,
  },
  compiler: {
    styledComponents: true, // Move this here
  },
};

export default nextConfig;
