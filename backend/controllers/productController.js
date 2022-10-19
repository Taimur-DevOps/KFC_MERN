const Products = require("../models/product");

//@desc  Get Products
//@route GET/api/products
//@access Private
const getProducts = async (req, res) => {
  try {
    console.log("the output is ", req.body.category);
    if (req.body.category) {
      const Data = await Products.find({ category: req.body.category });
      return res.status(200).json(Data);
    } else {
      const Data = await Products.find().sort({ category: 1 });
      return res.status(200).json(Data);
    }
    // console.log(Data);
  } catch (error) {
    res.status(400).json(error.message);
    console.log(error);
  }
};

// Adding new Product to Db
const setProducts = async (req, res) => {
  try {
    const addProduct = req.body;
    console.log("product detail >>>>", addProduct);
    const enterData = await Products.create(addProduct.product);
    return res.status(201).send(enterData);
  } catch (error) {
    res.status(400).send(error.message);
    console.log(error);
  }
};

// Update the Exixting product in Db
const updateProducts = (req, res) => {
  res.status(200).json({ message: `your update id is ${req.params.id}` });
};

// Deleteing Product from Db
const deleteProducts = async (req, res) => {
  // res.status(200).json({ message: `your delete id is ${req.params.id}` });
  const id = req.params.id;
  try {
    const result = await Products.findByIdAndDelete(id);
    res.send(result);
    console.log("the product is deleted");
  } catch (error) {
    res.status(400).json(error.message);
    console.log(error);
  }
};

module.exports = {
  getProducts,
  setProducts,
  updateProducts,
  deleteProducts,
};
