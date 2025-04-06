import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['res.cloudinary.com'], // Allow images from Cloudinary
  },
};

export default nextConfig;