import mongoose from 'mongoose';

async function dbConnection() {
  try {
    await mongoose.connect('mongodb://localhost/UserTask', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to db successfully');
  } catch (error) {
    console.log('Failed to connect to db', error);
  }
}

export default dbConnection;
