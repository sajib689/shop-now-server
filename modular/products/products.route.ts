import express from 'express';
import { deleteProductsController, getProductsController, productsController, updateProductsController } from './products.controller';

const productsRouter = express.Router();

productsRouter.post('/addproducts', productsController);
// http://localhost:5000/api/v1/addproducts
productsRouter.get('/getproducts', getProductsController);
// http://localhost:5000/api/v1/getproducts
productsRouter.delete('/deleteproducts/:id', deleteProductsController);
// http://localhost:5000/api/v1/deleteproducts/:id
productsRouter.put('/updateproducts/:id', updateProductsController);
// http://localhost:5000/api/v1/updateproducts/:id
export default productsRouter;