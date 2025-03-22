import express from "express";
import { asyncHandler } from './../../middlewares/asyncHandler';
import { placeOrderController,orderHistoryController } from "./order.controller";

const orderRouter = express.Router();

// create order router
orderRouter.post('/order', asyncHandler(placeOrderController))
orderRouter.get('/orderhistory', asyncHandler(orderHistoryController))

export default orderRouter;