import { Request, Response } from "express";
import { deleteProductsService, getProductsService, productsService, updateProductsService } from "./products.service";
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


// delete products controller

export const deleteProductsController = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const result = await deleteProductsService(id);
      res.status(200).json({
        message: "Successfully deleted products",
        status: "success",
        data: result,
      });
    } catch (err) {
      throw new Error("Error");
    }
  }

// update products controller

export const updateProductsController = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const result = await updateProductsService(id);
      res.status(200).json({
        message: "Successfully updated products",
        status: "success",
        data: result,
      });
    } catch (err) {
      throw new Error("Error");
    }
    }