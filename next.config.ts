import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  experimental: {
    staleTimes: {
      dynamic: 30,
      static: 180,
    },
  },

  images: {
    remotePatterns: [
      {
        protocol:"https",
        hostname:"cdn.pixabay.com",
        port:"",
        pathname:"/photo/**",
        search:""
      }
    ]
  }
};

export default nextConfig;
