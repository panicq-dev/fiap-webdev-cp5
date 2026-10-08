/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  partialPrefetching: true,
  reactCompiler: true,
};

export default nextConfig;
