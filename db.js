const mongoose = require('mongoose');
const mongoURL = process.env.MONGO_URL;

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log('MongoDB has been successfully connected!');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

module.exports = connectToMongo;
