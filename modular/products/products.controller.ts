import { Request, Response } from "express";
import { productsService } from "./products.service";

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