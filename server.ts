import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
// Connect to MongoDB
const connectDb = async () => {
  try {
    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.2m0rny5.mongodb.net/learnCode`;
    await mongoose.connect(uri);
    console.log("MongoDB connected");
  } catch (err) {
    console.log(err);
  }
};
