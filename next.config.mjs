/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    agentFeedback: true,
  },
  partialPrefetching: false,
  reactCompiler: true,
};

export default nextConfig;
