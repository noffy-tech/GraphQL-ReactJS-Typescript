import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    users: [User]
    user(_id: ID!): User
    posts: [Post]
  }

  type User {
    _id: ID!
    firstName: String
    lastName: String
    email: String
    password: String
  }

  type Post {
    _id: ID!
    title: String
    body: String
  }
  type Login {
    userId: ID
    firstName: String
    lastName: String
    token: String
    email: String
  }
  type Mutation {
    register(newUser: userInputs!): User
    createPost(newPost: postInput!): Post
    login(user: loginInput!): Login
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
