import IOrder from "./order.interface";
import { Order } from "./order.model";

// create an order
export const placeOrderService = async (order: Partial<IOrder>): Promise<IOrder | null> => {
    try {
        const newOrder = await Order.create(order);
        return newOrder;
    } catch {
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