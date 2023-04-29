import express from 'express';
import * as productController from '../controllers/products';

const productRouter = express.Router();

productRouter.get(
  '/',
  productController.getAllProducts,
);

productRouter.post(
  '/',
  productController.insertProduct,
);

export default productRouter;