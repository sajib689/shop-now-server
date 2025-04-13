import { model, Model, Schema } from "mongoose";
import IOrder from "./order.interface";

type orderModel = Model<IOrder, object>
export const orderSchema = new Schema({ 
    productName: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    deliveryLocation: { type: String, required: true },
    paymentType: { type: Boolean, required: true },
    price: { type: String, required: true },
    quantity: { type: String, required: true },
    trxId: { type: String, required: true },
    status: { type: String, required: true },
    createAt: { type: Date, default: Date.now }
})

export const Order = model<IOrder, orderModel>("Order", orderSchema);