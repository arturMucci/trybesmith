import express from 'express';
import loginController from '../controllers/login';
import validateLogin from '../middlewares/validateLogin';

const loginRouter = express.Router();

loginRouter.post(
  '/',
  validateLogin,
  loginController.userLogin,
);

loginRouter.use(
  validateLogin,
);

export default loginRouter;
