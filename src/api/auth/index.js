import express from 'express';
import signUp from './services/signUp';
import signIn from './services/signIn';
import validationSignIn from './validation/signIn';
import validationSignUp from './validation/signUp';

const router = express.Router();
router
  .post('/signUp', validationSignUp, signUp);

router
  .post('/signIn', validationSignIn, signIn);

export default router;
