import IOrder from "./order.interface";
import { Order } from "./order.model";

// create an order
export const placeOrderService = async (order: Partial<IOrder>): Promise<IOrder | null> => {
    try {
        const newOrder = await Order.create(order);
        return newOrder;
    } catch (err) {
        console.error("MongoDB Error:", err); // <-- this line
        throw new Error("Error while placing order");
    }
};


// get all orders history

export const orderHistoryService = async () => {
    try {
        const orders = await Order.find();
        return orders;
    } catch (error) {
        throw new Error("Error while fetching order history");
    }
}

// get order by email address

export const getOrderByEmail = async (email: string) => {
    try {
        
        const order = await Order.find({email});
        return order;
    } catch (error) {
        throw new Error("Error while fetching order history");
    }
}

// patch for products cancle 

export const orderCancleService = async (id: string) => {
    try {
      // Attempt to find and update the order's status
      const order = await Order.findByIdAndUpdate(
        id,
        { status: 'cancelled' },
        { new: true }
      );
      // If the order is not found, return null
      if (!order) {
        return null;
      }
  
      return order;
    } catch (error) {
      // Log error and throw for further handling
      console.error('Error while updating the order status:', error);
      throw new Error('Error while cancelling order');
    }
  };