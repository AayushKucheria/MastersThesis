import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  // Set the base path to match your repository name
  // For example, if your repo is username/experiment, use "/experiment"
  basePath: process.env.NODE_ENV === 'production' ? '/MastersThesis
Public
' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
