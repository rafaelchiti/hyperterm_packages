const npmKeyword = require('npm-keyword');
const got = require('got');

const findPlugins = () => {
  return npmKeyword('hyperterm').then((packages) => {
    return Promise.all(packages.map((package) => {
      return got(`http://registry.npmjs.org/${package.name}`).then((response) => {
        return JSON.parse(response.body);
      });
    }));
  });
};

const resolvers = {
  Query: {
    plugins(root, args) {
      return findPlugins();
    }
  },
  Plugin: {
    id(root) {
      return root._id;
    }
  }
};

module.exports = resolvers;
