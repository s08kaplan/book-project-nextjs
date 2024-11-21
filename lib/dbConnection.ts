import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("*** Already connected to MongoDB ***");
      return;
    }

    const mongoURI = process.env.MONGODB;
console.log("mongoUrI:", mongoURI);
    if (!mongoURI) {
      throw new Error("MONGODB connection string is missing in .env file");
    }

    await mongoose.connect(mongoURI);
    console.log("***MONGODB CONNECTED SUCCESSFULLY***");
  } catch (error) {
    console.log("DB not connected!!!", error);
    throw error;
  }
};
