import mongoose, { Document, Model, Schema } from "mongoose";


import { passwordEncrypt,
  emailValidate } from "@/src/helpers/validationHelpers"

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
      set: (password:string) => passwordEncrypt(password),
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

const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
export default User;