const { apolloExpress, graphiqlExpress } = require('apollo-server');
const { makeExecutableSchema } = require('graphql-tools');
const bodyParser = require('body-parser');

const Schema = require('./data/schema');
const Resolvers = require('./data/resolvers');


module.exports = (app) => {
  const executableSchema = makeExecutableSchema({
    typeDefs: Schema,
    resolvers: Resolvers,
    allowUndefinedInResolve: true
  });

  app.use('/graphql', bodyParser.json(), apolloExpress({
    schema: executableSchema
  }));

  app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
  }));
};
