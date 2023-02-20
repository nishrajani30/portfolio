/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer');

const nextConfig = withContentlayer({
  experimental: {
    appDir: true,
  },
});

module.exports = nextConfig
