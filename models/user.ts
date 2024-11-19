import mongoose, { Document, Model, Schema } from "mongoose";
import bcrypt from "bcrypt";
import { emailValidate } from "@/src/helpers/validationHelpers";

  interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    isActive: boolean;
    isAdmin: boolean;
    gender?: string;
    image?: string;
  }
  

const UserSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      index: true,
    },

    email: {
      type: String,
      trim: true,
      unique: true,
      index: true,
      required: true,
      set: (mail:string) => emailValidate(mail),
    },

    password: {
      type: String,
      trim: true,
      required: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },

    gender: String,

    image: {
      type: String,
      trim: true,
    },
  },
  {
    collection: "users",
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next) {
  const user = this as IUser;

  // Only hash the password if it has been modified or is new
  if (!user.isModified("password")) {
    return next();
  }

  if (!passwordRegex.test(user.password)) {
    return next(new Error("Please provide a password that meets the required criteria."));
  }

  try {
    const hashedPassword = await bcrypt.hash(user.password, saltRounds);
    user.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});
const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
export default User;