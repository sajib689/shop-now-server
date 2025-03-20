import express from 'express';
import { productsController } from './products.controller';

const productsRouter = express.Router();

productsRouter.post('/addproducts', productsController);
// http://localhost:5000/api/v1/addproducts