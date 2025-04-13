import { model, Model, Schema } from "mongoose";
import { IProducts } from "./products.interface";

type productsModel = Model<IProducts, object>

export const productsSchema = new Schema({
    id: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    deliveryLocation: { type: String, required: true },
    paymentType: { type: Boolean, required: true },
    productName: { type: String, required: true },
    price: { type: String, required: true },
    quantity: { type: String, required: true },
    total: { type: String, required: true },
    trxId: { type: String, required: true },
    status: { type: Boolean, required: true },
    createAt: { type: Date, default: Date.now },
})

export const Products = model<IProducts, productsModel>("Products", productsSchema);