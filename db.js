const mongoose = require('mongoose');
const mongoURL = "mongodb+srv://root:root@cluster0.8w1qdku.mongodb.net/?retryWrites=true&w=majority";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log('MongoDB has been successfully connected!');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

module.exports = connectToMongo;
