import express from 'express';
import * as userController from '../controllers/users';

const userRouter = express.Router();

userRouter.post(
  '/',
  userController.insertUser,
);

export default userRouter;