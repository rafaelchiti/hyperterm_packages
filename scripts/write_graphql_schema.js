const fs = require('fs');
const path = require('path');
const graphql = require('graphql');
const { buildSchemaFromTypeDefinitions } = require('graphql-tools');

const typeDefinitions = require('../server/data/schema');
const schema = buildSchemaFromTypeDefinitions(typeDefinitions);

graphql.graphql(schema, graphql.introspectionQuery).then(function (result) {
  fs.writeFileSync(path.resolve(path.join(__dirname, '../schema.json')),
    JSON.stringify(result, null, 2));
});
