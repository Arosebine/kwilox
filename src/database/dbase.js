// Require mongoose
const mongoose = require("mongoose");
//Require dotenv file
require("dotenv").config();
const { MONGODB_URL } = process.env;

// Async mongoose connection using async await
const mongoDb = async () => {
  try {
    await mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connection Established...");

    // Seed Data
  } catch (error) {
    console.error(error.message);

    // Exit with failure
    process.exit(1);
  }
};

module.exports = mongoDb;
