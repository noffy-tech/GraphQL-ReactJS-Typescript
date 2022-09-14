import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { JWT_SECRETE_TOKEN } from "./config.js";

const User = mongoose.model("User");
const Post = mongoose.model("Post");

const resolvers = {
  Query: {
    users: async () => await User.find({}),
    user: async (_, { id }) => await User.findOne({ id }),
  },
  Mutation: {
    register: async (_, { newUser }) => {
      const user = await User.findOne({ email: newUser.email });
      if (user) {
        throw new Error("user exist!");
      }
      const hashPassword = await bcrypt.hash(newUser.password, 12);
      const NewUserEntry = new User({
        ...newUser,
        password: hashPassword,
      });
      return await NewUserEntry.save();
    },
    login: async (_, { user }) => {
      const userDetails = await User.findOne({ email: user.email });
      if (!userDetails) {
        throw new Error("User does not exist");
      }
      const doMatch = await bcrypt.compare(user.password, userDetails.password);
      if (!doMatch) {
        throw new Error("Invalid Password!");
      }
      const token = jwt.sign({ userId: user._id }, JWT_SECRETE_TOKEN);
      const userData = {
        userId: userDetails._id,
        firstName: userDetails.firstName,
        lastName: userDetails.lastName,
        email: userDetails.email,
        token,
      };
      return userData;
    },
    createPost: async (_, { newPost }) => {
      const doPost = new Post({
        ...newPost,
      });

      return await doPost.save();
    },
  },
};

export default resolvers;
