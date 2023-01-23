const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const connectDB = async () => {
  const connection = await mongoose.connect(process.env.MONGO_URI);
  console.log(`MongoDB connected: ${connection.connection.host}`.cyan.bold);
}

module.exports = connectDB;