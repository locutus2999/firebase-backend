const schema = `
  input SettingsInput {
    theme: String!,
    test: String
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
