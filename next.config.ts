import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  
  // images : {
  //   domains : ['plus.unsplash.com','images.unsplash.com']
  // }
  /* config options here */
};

export default nextConfig;
