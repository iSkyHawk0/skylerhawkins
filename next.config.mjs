/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true, // Move this here
  },
  // Remove invalid keys like swcLoader and swvGzip
};

export default nextConfig;
