import express from 'express';
import productRouter from './routes/ProductRouter';
import userRouter from './routes/userRouter';
import orderRouter from './routes/orderRouter';
import loginRouter from './routes/loginRouter';
import errorHandler from './middlewares/errorHandler';

const app = express();

app.use(express.json());

app.use('/products', productRouter);

app.use('/users', userRouter);

app.use('/orders', orderRouter);

app.use('/login', loginRouter);

app.use(errorHandler);

export default app;
