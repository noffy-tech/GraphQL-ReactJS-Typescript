import bcrypt from "bcryptjs";
import mongoose from "mongoose";

const User = mongoose.model("User");

const resolvers = {
  Query: {
    users: () => User,
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
  },
};

export default resolvers;
