import { IProducts } from "./products.interface"
import { Products } from "./products.model"

export const productsService = async (products: Partial<IProducts>) => {
    try {
       const createProducts = await Products.create(products)
       return createProducts
    } catch (err) {
        throw new Error("Error")
    }
}