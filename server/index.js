const express = require('express');
const { apolloServer } = require('apollo-server');
const Schema = require('./data/schema');
const Resolvers = require('./data/resolvers');

const PORT = 8080;

const app = express();

app.use('/graphql', apolloServer({
  graphiql: true,
  pretty: true,
  schema: Schema,
  resolvers: Resolvers
}));

app.listen(PORT, () => {
  console.log(`Server is now running on http://localhost:${PORT}/graphql`);
});
