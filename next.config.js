/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    domains: [],
  },
  async redirects() {
    return [
      { source: '/experience', destination: '/about#experience', permanent: true },
      { source: '/education', destination: '/about#education', permanent: true },
      { source: '/skills', destination: '/about#skills', permanent: true },
    ];
  },
};

export default nextConfig;
