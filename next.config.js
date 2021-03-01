const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  experimental: {
    jsconfigPaths: true, // enables it for both jsconfig.json and tsconfig.json
  },

  webpack: function (config) {
    config.module.rules.push({ test: /\.md$/, use: 'raw-loader' });
    config.module.rules.push({ test: /\.yml$/, use: 'raw-loader' });
    return config;
  },
});
