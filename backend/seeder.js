// database mai simple way sy data add karta hai seed

const mongoose = require("mongoose");
const dotenv = require("dotenv");
require("colors");
const connectDb = require("./config/config");

//model
const Product = require("./models/product");

//diff product Objects
const Products = require("./data/products");

//config dot env and mongodb connection file
dotenv.config();
connectDb();

//import data
const importData = async () => {
  try {
    await Product.deleteMany();
    const sampleData = Products.map((product) => {
      return { ...product };
    });
    await Product.insertMany(sampleData);
    console.log(`Data imported`.bgGreen.white);
    process.exit();
  } catch (error) {
    console.log(`The error is ${error}`.bgWhite.black);
    process.exit(1);
  }
};

const dataDestroy = () => {};

//The "argv" array contains everything given on the command line
if (process.argv[2] === "-d") {
  dataDestroy();
} else {
  importData();
}
