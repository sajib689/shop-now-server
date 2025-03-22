import express from "express";
import { asyncHandler } from './../../middlewares/asyncHandler';
import { placeOrderController } from "./order.controller";

const orderRouter = express.Router();

// create order router
orderRouter.post('/order', asyncHandler(placeOrderController))

export default orderRouter;