import express from 'express';
import userLogin from '../controllers/login';
import validateLogin from '../middlewares/validateLogin';

const loginRouter = express.Router();

loginRouter.post(
  '/',
  validateLogin,
  userLogin,
);

loginRouter.use(
  validateLogin,
);

export default loginRouter;
