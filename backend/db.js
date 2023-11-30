// db.js
const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://smilesachet:Sachet123@cluster0.i0qsvl2.mongodb.net/?retryWrites=true&w=majority'; // Replace with your MongoDB connection string

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
