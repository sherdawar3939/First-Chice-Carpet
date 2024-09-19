/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["images.pexels.com", "res.cloudinary.com"], // Add the domain of the image source
  },
};

export default nextConfig;
