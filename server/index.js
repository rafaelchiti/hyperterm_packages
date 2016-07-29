const express = require('express');
const npmKeyword = require('npm-keyword');
const got = require('got');

const app = express();

app.get('/plugins', (req, res) => {
  npmKeyword('hyperterm').then((packages) => {
    Promise.all(packages.map((package) => {
      return got(`http://registry.npmjs.org/${package.name}`).then((response) => {
        return JSON.parse(response.body);
      });
    })).then((packages) => {
      res.send(packages);
    });
  });
});

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
