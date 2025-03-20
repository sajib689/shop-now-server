import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { createServer } from "http";
const app = express();
dotenv.config();
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  })
);
app.use(express.urlencoded({ extended: true }));
const server = createServer(app);
// Connect to MongoDB
const connectionToDb = async () => {
  try {
    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.2m0rny5.mongodb.net/learnCode`;
    await mongoose.connect(uri);
    console.log("MongoDB connected");
  } catch (err) {
    console.log(err);
  }
};

connectionToDb();
