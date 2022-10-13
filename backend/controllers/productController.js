const Products = require("../models/product");

//@desc  Get Products
//@route GET/api/products
//@access Private
const getProducts = async (req, res) => {
  try {
    console.log("the output is ", req.body.category);
    if(req.body.category){
    const Data = await Products.find({ category: req.body.category });
     return res.status(200).json(Data);
    }
    else{
      const Data = await Products.find();
      return res.status(200).json(Data);

    }
    // console.log(Data);
  } catch (error) {
    res.status(400).json(error.message);
    console.log(error);
  }
};




const setProducts = (req, res) => {
  console.log(req.body);
};

const updateProducts = (req, res) => {
  res.status(200).json({ message: `your update id is ${req.params.id}` });
};

const deleteProducts = (req, res) => {
  res.status(200).json({ message: `your delete id is ${req.params.id}` });
};

module.exports = {
  getProducts,
  setProducts,
  updateProducts,
  deleteProducts,
};
