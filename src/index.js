import 'dotenv/config';
import http from 'http';
import dbConnection from './dbConnection';
import app from './app';

if (!process.env.JWT_SECRET || !process.env.PORT) {
  throw new Error('Missing environment variables');
}

const PORT = process.env.PORT;

http
  .createServer(app)
  .listen(PORT, async () => {
    console.log(`Server started on port ${PORT}`);
    await dbConnection();
  });
