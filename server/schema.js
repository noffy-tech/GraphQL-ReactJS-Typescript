import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    users: [User]
  }

  type User {
    id: ID!
    firstName: String
    lastName: String
    email: String
    password: String
  }

  type Mutation {
    register(newUser: userInputs!): User
  }

  input userInputs {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }
`;

export default typeDefs;
