import express from "express";
import { asyncHandler } from './../../middlewares/asyncHandler';
import { placeOrderController,orderHistoryController, getOrderByEmailController } from "./order.controller";

const orderRouter = express.Router();

// create order router
orderRouter.post('/order', asyncHandler(placeOrderController))
orderRouter.get('/orderhistory', asyncHandler(orderHistoryController))
orderRouter.get('/orderhistory/:email', asyncHandler(getOrderByEmailController))
export default orderRouter;