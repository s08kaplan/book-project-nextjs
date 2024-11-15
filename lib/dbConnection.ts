import mongoose from "mongoose";


export const dbConnection = () => {
  mongoose.connect(process.env.MONGODB as string).then(() => {
    console.log("***MONGODB CONNECTED SUCCESSFULLY***");
  }).catch((error) => {
    console.log("DB not connected!!!",error);
  })
}


