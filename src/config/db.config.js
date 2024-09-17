import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const url = process.env.DB_URL 

let client;
export const connectToMongoDB = async () => {
  try {
    console.log(url)
    client = mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.log("Error while connecting to db", error);
  }
};

export const getDB = () => {
  return client.db();
};
