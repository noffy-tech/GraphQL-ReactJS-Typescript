import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import typeDefs from "./schema.js";

import mongoose from "mongoose";
import { MONGO_DB_URI_KEY } from "./config.js";

mongoose.connect(MONGO_DB_URI_KEY);
mongoose.connection.once("open", () => {
  console.log("Connected Successfully!");
});
//All Schemas
import "./modules/User.js";
import "./modules/Post.js";

// Resolvers
import resolvers from "./resolvers.js";
const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
