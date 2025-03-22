import { Request, Response } from "express";
import { orderHistoryService, placeOrderService } from "./order.service";

export const placeOrderController = async (req: Request, res: Response) => {
    try {
        const order = req.body;
        const newOrder = await placeOrderService(order);
        res.status(201).json({
            message: "Order placed successfully",
            status: 200,
            data: newOrder,
        });
    } catch (error) {
       throw new Error("Error while placing order");
    }
};

// get all orders history
export const orderHistoryController = async (req: Request, res: Response) => {
    try {
        const orders = await orderHistoryService();
        res.status(200).json({
            message: "Order history fetched successfully",
            status: 200,
            data: orders,
        });
    } catch (error) {
       throw new Error("Error while fetching order history");
    }
}