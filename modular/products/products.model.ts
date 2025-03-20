import { model, Model, Schema } from "mongoose";
import { IProducts } from "./products.interface";

type productsModel = Model<IProducts, object>

export const productsSchema = new Schema({
    id: {
        type: String,
    },
    productName: {
        type: String,
    },
    productPrice: {
        type: String,
    },
    productDescription: {
        type: String,
    },
    productCategory: {
        type: String,
    },
    productQuantity: {
        type: String,
    },
    productInStock: {
        type: Boolean,
    },
    productImage: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
})

export const Products = model<IProducts, productsModel>("Products", productsSchema);