import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  basePath: '/next-ai-core',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
