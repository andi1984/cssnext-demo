module.exports = {
  // Other Next.js config options
  webpack(config, options) {
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};