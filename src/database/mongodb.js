import mongoose from "mongoose";

export const connectToDB = async () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected Successfully"))
    .catch((err) => console.log(`Error in Connecting to DB ${err.message}`));
};
