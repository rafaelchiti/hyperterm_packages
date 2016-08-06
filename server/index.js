const express = require('express');
const graphQLServer = require('./graphql_server');

const PORT = 4001;

const app = express();

graphQLServer(app);

if (process.env.NODE_ENV !== 'production') {
  const devServer = require('./dev_server');
  devServer(app);
} else {
  app.use('/', express.static('build'));
}

app.listen(PORT, () => {
  console.log(`Server is now running on http://localhost:${PORT}/graphql`);
});
