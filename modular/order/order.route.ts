import express from "express";
import { asyncHandler } from './../../middlewares/asyncHandler';
import { placeOrderController,orderHistoryController, getOrderByEmailController, orderCancleController } from "./order.controller";

const orderRouter = express.Router();

// create order router
orderRouter.post('/order', asyncHandler(placeOrderController))
orderRouter.get('/orderhistory', asyncHandler(orderHistoryController))
orderRouter.get('/orderhistory/:email', asyncHandler(getOrderByEmailController))
orderRouter.patch('/orderupdate/:id', asyncHandler(orderCancleController))
export default orderRouter;