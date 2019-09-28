
const { ApolloServer, gql } = require('apollo-server-koa');

const users = [
  {
    id: 1,
    name: 'loteoo'
  }
]

const items = [
  {
    id: 1,
    name: 'test'
  }
]

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Item" type defines the queryable fields for every book in our data source.
  type Item {
    id: ID!
    name: String
    date: String
    author: User
  }


  type User {
    id: ID!
    name: String
    items: [Item]
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "items" query returns an array of zero or more Items (defined above).
  type Query {
    items: [Item]
    users: [User]
  }

  type Mutation {
    addItem(name: String!, author: ID!): Item
  }

  type Subscription {
    itemAdded(itemId: ID!): Item
  }
`;


const resolvers = {
  Query: {
    items: () => items,
    users: () => users,
  },
};



// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

module.exports = server;
