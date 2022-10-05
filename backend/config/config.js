const mongoose = require("mongoose");
require("colors");

const connectDB = async () => {
  try {
    const url = process.env.MONGO_URI;
    const conn = await mongoose.connect(url, {
      //mongoose aur db k andhar conflict milty hain is liye hum yai use karty hain
    });
    console.log(`Mongodb database Connected Successfully !`.bgCyan.white);
  } catch (error) {
    console.log(`Db not connected due to ${error.message}`.bgRed.white);
  }
};

module.exports = connectDB;
