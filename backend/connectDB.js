const mongoose = require('mongoose');
require('dotenv').config(); // Ensure dotenv is loaded

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI; // Use the environment variable
    if (!mongoURI) {
      throw new Error("MongoDB URI is not defined in the .env file");
    }

    await mongoose.connect(mongoURI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Database connection error:', error);
  }
};

module.exports = connectDB;
