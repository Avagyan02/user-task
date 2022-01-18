import express from 'express';
import authRouter from './api/auth/index';
import usersRouter from './api/users/index';
import notFound from './utils/notFoundHandler';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/auth', authRouter);
app.use('/api/user', usersRouter);
app.use(notFound);

export default app;
