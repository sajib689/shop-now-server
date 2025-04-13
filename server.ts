import express, { Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { createServer } from 'http';
import usersRouter from './modular/users/users.route';
import productsRouter from './modular/products/products.route';
import orderRouter from './modular/order/order.route';
import BkashGateway from 'bkash-payment-gateway';

dotenv.config();

const app = express();
const server = createServer(app);

// Set up environment variables
const PORT = process.env.PORT || 5000;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,    // You may replace "*" with specific URLs in production
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  })
);
app.use(express.urlencoded({ extended: true }));

// const bkashConfig = {
//   baseURL: 'https://checkout.sandbox.bka.sh/v1.2.0-beta',
//   key: process.env.BKASH_KEY || '',
//   secret: process.env.BKASH_SECRET || '',
//   username: process.env.BKASH_USERNAME || '',
//   password: process.env.BKASH_PASSWORD || '',
// };



// const bkash = new BkashGateway(bkashConfig);



// Use Routers
app.use('/api/v1/', usersRouter);
app.use('/api/v1/', productsRouter);
app.use('/api/v1/', orderRouter);


// app.post('/api/v1/bkash/query-payment', async (req: Request, res: Response) => {
//   const { paymentID } = req.body;

//   // if (!paymentID) {
//   //   return res.status(400).json({ message: 'PaymentID is required' });
//   // }

//   // try {
//   //   const result = await bkash.queryPayment(paymentID);
//   //   res.json(result);
//   // } catch (error: any) {
//   //   res.status(500).json({ message: 'Error querying payment', error: error.message });
//   // }
// });

// MongoDB Connection
const connectionToDb = async () => {
  if (!DB_USER || !DB_PASSWORD) {
    console.error('Missing DB credentials');
    return;
  }

  try {
    const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.2m0rny5.mongodb.net/shopNow`;
    await mongoose.connect(uri);
    console.log("MongoDB connected");
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};

// Start Server
server.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await connectionToDb();
});
