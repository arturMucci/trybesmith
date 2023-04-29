import express from 'express';
import productRouter from './routes/ProductRouter';
import userRouter from './routes/userRouter';
import orderRouter from './routes/orderRouter';

const app = express();

app.use(express.json());

app.use('/products', productRouter);

app.use('/users', userRouter);

app.use('/orders', orderRouter);

export default app;
