import mongoose from "mongoose";

export const connectToMongoDB = async () => {
  try {
    const client = mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.log("Error while connecting to db", err);
  }
};
