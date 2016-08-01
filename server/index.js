const express = require('express');
const { apolloServer } = require('apollo-server');
const Schema = require('./data/schema');
const Resolvers = require('./data/resolvers');

const PORT = 4001;

const app = express();

app.use('/graphql', apolloServer({
  graphiql: true,
  pretty: true,
  schema: Schema,
  resolvers: Resolvers
}));

if (process.env.NODE_ENV !== 'production') {
  const devServer = require('./dev_server');
  devServer(app);
}

app.use('/public', express.static('public'));

app.listen(PORT, () => {
  console.log(`Server is now running on http://localhost:${PORT}/graphql`);
});
