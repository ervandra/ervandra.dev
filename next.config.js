const path = require('path');

module.exports = {
  loader: 'custom',
  swcMinify: true,
  images: {
    loader: 'default',
    domains: ['localhost'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  future: {
    webpack5: true,
  },
};
