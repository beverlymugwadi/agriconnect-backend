// test-db-connection.js - Test MongoDB connection
require('dotenv').config();
const mongoose = require('mongoose');

async function testConnection() {
  try {
    console.log('Attempting to connect to MongoDB Atlas...');
    console.log(`Connection string: ${process.env.MONGO_URI.replace(/\/\/([^:]+):([^@]+)@/, '//***:***@')}`);
    
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000 // 5 seconds timeout
    });

    console.log(`✅ MongoDB Connected Successfully: ${conn.connection.host}`);
    console.log(`Database name: ${conn.connection.name}`);
    
    // Close the connection
    await mongoose.connection.close();
    console.log('Connection closed');
    
    return true;
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    return false;
  }
}

// Run the test
testConnection()
  .then(success => {
    console.log(`Connection test ${success ? 'passed' : 'failed'}`);
    process.exit(success ? 0 : 1);
  });
