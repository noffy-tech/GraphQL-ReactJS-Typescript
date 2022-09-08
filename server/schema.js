import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    users: [User]
    user(id: ID!): User
    posts: [Post]
  }

  type User {
    id: ID!
    firstName: String
    lastName: String
    email: String
    password: String
  }

  type Post {
    title: String
    body: String
    createdBy: ID!
  }
  type Token {
    token: String
  }
  type Mutation {
    register(newUser: userInputs!): User
    createPost(newPost: postInput!): Post
    login(user: loginInput!): Token
  }

  input userInputs {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }
  input postInput {
    title: String!
    body: String!
  }
  input loginInput {
    email: String!
    password: String!
  }
`;

export default typeDefs;
