const { Package } = require('./models');

module.exports = {
  Query: {
    packages(root, { term }) {
      return Package.search(term);
    }
  },
  Package: {
    id: (pkg) => pkg._id,
    author: (pkg) => pkg.author && pkg.author.name
  }
};
