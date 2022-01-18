import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: 'Username is required',
  },
  password: {
    type: String,
    required: 'Password is required',
  },
});

const User = mongoose.model('Users', userSchema);
export default User;
