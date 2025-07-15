const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email:    { type: String, required: true }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

const createUser = async (userData) => {
  const newUser = new User(userData);
  return await newUser.save();
};

const getUserByUsername = async (username) => {
  return await User.findOne({ username });
};

module.exports = { createUser, getUserByUsername };
