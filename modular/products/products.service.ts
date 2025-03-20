import { IProducts } from "./products.interface"
import { Products } from "./products.model"

// create products
export const productsService = async (products: Partial<IProducts>) => {
    try {
       const createProducts = await Products.create(products)
       return createProducts
    } catch (err) {
        throw new Error("Error")
    }
}

// get all products
export const getProductsService = async () => {
    try {
        const result = await Products.find();
        return result
    } catch (err) {
        throw new Error("Error")
    }
}