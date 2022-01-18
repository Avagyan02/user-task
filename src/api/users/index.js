import express from 'express';
import getUsers from './services/getUsers';
import authorize from '../../middlewares/authorize';

const router = express.Router();
router
  .get('/', authorize, getUsers);

export default router;
