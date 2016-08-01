const typeDefinitions = `
type Plugin {
  id: String!
  name: String!
  description: String
  homepage: String
}
type Query {
  plugins: [Plugin]
}
schema {
  query: Query
}
`;

module.exports = [typeDefinitions];
