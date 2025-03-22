import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { createServer } from "http";
import usersRouter from './modular/users/users.route';
import productsRouter from './modular/products/products.route';
import orderRouter from './modular/order/order.route';
const PORT = process.env.PORT || 5000;
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
// router

app.use('/api/v1/', usersRouter)
app.use('/api/v1/', productsRouter)
app.use('/api/v1/', orderRouter)
// Connect to MongoDB
const connectionToDb = async () => {
  try {
    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.2m0rny5.mongodb.net/shopNow`;
    await mongoose.connect(uri);
    console.log("MongoDB connected");
  } catch (err) {
    console.log(err);
  }
};



server.listen(PORT, async() => {
    console.log(`Server is running on port ${PORT}`);
    await connectionToDb();
});