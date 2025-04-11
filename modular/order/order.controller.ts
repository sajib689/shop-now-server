import { Request, Response } from "express";
import { getOrderByEmail, orderCancleService, orderHistoryService, placeOrderService } from "./order.service";

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

// get order by email address
export const getOrderByEmailController = async (req: Request, res: Response) => {
    try {
        const email = req.params.email;
        const order = await getOrderByEmail(email);
        res.status(200).json({
            message: "Order fetched successfully",
            status: 200,
            data: order,
        });
    } catch (error) {
       throw new Error("Error while fetching order history");
    }
}

// // patch for products cancle
export const orderCancleController = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
  
      // Ensure id is valid (you can also check if it's a valid MongoDB ObjectId)
      if (!id) {
        return res.status(400).json({
          message: 'Invalid order ID',
          status: 400,
        });
      }
  
      // Call the service function to cancel the order
      const order = await orderCancleService(id);
  
      // If the order wasn't found or updated, send an error response
      if (!order) {
        return res.status(404).json({
          message: 'Order not found',
          status: 404,
        });
      }
  
      // Return the success response
       res.status(200).json({
        message: 'Order cancelled successfully',
        status: 200,
        data: order,
      });
    } catch (error) {
      console.error('Error while cancelling order:', error);
      
    }
  };