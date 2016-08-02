const typeDefinitions = `
type Package {
  id: String!
  name: String!
  description: String
  homepage: String
}
type Query {
  packages: [Package]
}
schema {
  query: Query
}
`;

module.exports = [typeDefinitions];
