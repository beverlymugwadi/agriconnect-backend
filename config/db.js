// config/db.js - Database connection
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log('Attempting to connect to MongoDB...');
    console.log(`Connection string: ${process.env.MONGO_URI.replace(/\/\/([^:]+):([^@]+)@/, '//***:***@')}`);
    
    // Connecting to MongoDB without deprecated options
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
    process.exit(1); // Exit the process in case of error
  }
};

module.exports = connectDB;
