/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images: {
    domains: ['via.placeholder.com', 'jsonplaceholder.typicode.com', 'avatars.dicebear.com']
  }
};

module.exports = nextConfig;
