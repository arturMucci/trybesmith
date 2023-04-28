import express from 'express';
import controllerInsertProduct from '../controllers/products';

const productRouter = express.Router();

productRouter.post(
  '/',
  controllerInsertProduct,
);

export default productRouter;