const npmKeyword = require('npm-keyword');
const got = require('got');

const findPackages = () => {
  return npmKeyword('hyperterm').then((packages) => {
    return Promise.all(packages.map((pkg) => {
      return got(`http://registry.npmjs.org/${pkg.name}`).then((response) => {
        return JSON.parse(response.body);
      });
    }));
  });
};

const resolvers = {
  Query: {
    packages(root, args) {
      return findPackages();
    }
  },
  Package: {
    id(root) {
      return root._id;
    }
  }
};

module.exports = resolvers;
