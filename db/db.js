const mongoose = require('mongoose');
const config = require('config');

const connectDB = async () => {
  return await mongoose.connect(config.get('mongoURI'), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
