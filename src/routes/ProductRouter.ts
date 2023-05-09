import express from 'express';
import {
  getAllProducts,
  insertProduct,
} from '../controllers/products';
import validateProduct from '../middlewares/validateProduct';

const productRouter = express.Router();

productRouter.get(
  '/',
  getAllProducts,
);

productRouter.post(
  '/',
  validateProduct,
  insertProduct,
);

export default productRouter;