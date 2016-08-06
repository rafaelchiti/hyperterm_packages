const npmKeyword = require('npm-keyword');
const got = require('got');

const REFRESH_INTERVAL = 5 * 60 * 1000;

const loadPackages = () => {
  return npmKeyword('hyperterm').then((packages) => {
    return Promise.all(packages.map((pkg) => {
      return got(`http://registry.npmjs.org/${pkg.name}`).then((response) => {
        return JSON.parse(response.body);
      });
    }));
  });
};

const packages = loadPackages();

// Reload the packages periodically.
setInterval(loadPackages, REFRESH_INTERVAL);

const searchPackages = (term, packages) => {
  if (!term) {
    return packages;
  }

  return packages.filter((pkg) =>
    pkg.name.toLowerCase().includes(term.toLowerCase())
  );
};

const Package = {
  search(term) {
    return packages.then((packages) => searchPackages(term, packages));
  }
};

module.exports = { Package };
