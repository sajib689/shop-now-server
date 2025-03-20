import { Request, Response } from "express";
import { getProductsService, productsService } from "./products.service";
import { IProducts } from "./products.interface";

// create a new product
export const productsController = async (req: Request, res: Response) => {
    try {
        const products = req.body;
        const result = await productsService(products);
        res.status(200).json({
            message: "Successfully created product",
            status: "success",
            data: result
        })
    } catch (err) {
        throw new Error("Error")
    }
}

// get all products

export const getProductsController = async (req: Request, res: Response) => {
    try {
        const result = await getProductsService();
        res.status(200).json({
            message: "Successfully get all products",
            status: "success",
            data: result
        })
    } catch (err) {
        throw new Error("Error")
    }
}