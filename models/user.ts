import mongoose, { Document, Model, Schema, CallbackError } from "mongoose";
import bcrypt from "bcrypt";
import { emailValidate, passwordRegex, saltRounds } from "@/src/helpers/validationHelpers";

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
  } catch (error: unknown) {
    if (error instanceof Error) {
      next(error);
    } else {
      next(new Error("An unknown error occurred during password hashing"));
    }
  }
});
const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
export default User;