const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@common': path.resolve(__dirname, 'src/common/'),
      '@feature': path.resolve(__dirname, 'src/feature/'),
      '@images': path.resolve(__dirname, 'src/images/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@router': path.resolve(__dirname, 'src/router'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@errorBoundary': path.resolve(__dirname, 'src/ErrorBoundary'),
      '@providers': path.resolve(__dirname, 'src/providers'),
    },
  },
};
