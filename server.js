const { GraphQLServer } = require("graphql-yoga");

const typeDefs = `
type User {
  id: ID!
  name: String
  age: Int
}
type Query {
  description: String
  users: [User]
}
`;

const resolvers = {
  Query: {
    description: () => `This is the API for a simple blogging application`,
    users() {
      return [
        {
          id: 0,
          name: "MR Example 01",
          age: 25
        },
        {
          id: 1,
          name: "MR Example 02",
          age: 25
        }
      ];
    }
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() =>
  console.log(`The server is running on http://localhost:4000`)
);
