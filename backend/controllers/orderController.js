const Orders = require("../models/orderModel");
const asyncHandler = require("express-async-handler");

//@desc  Get Products
//@route GET/api/products
//@access Private
const setOrders = async (req, res) => {
  const { userid, item } = req.body;
  console.log(req.body);
  console.log("this is order controller");

  try {
    // console.log("the output is ", req.body.category);
    const Data = await Orders.create({
      user: userid,
      cart: item,
    });
    Data.save();
    console.log(Data);
    res.status(200).json(Data);
  } catch (error) {
    res.status(400).json(error.message);
    console.log(error);
  }
};

const getOrders = async (req, res) => {
  console.log(req.user._id)
  try {
    const Data = await Orders.find({ user: req.user._id });
    res.status(200).json(Data);
  } catch (error) {
    res.status(400).json(error.message);
    console.log(error);
  }
};


// fetching all the orders
const getAllOrders = asyncHandler(async (req, res) => {
  try {
   const orders= await Orders.find()
   .populate('user')
   console.log("jahksjdh",orders)

   res.status(200).send(orders)
  } catch (error) {
   res.status(404).json({message:error})
  }
 });
 

module.exports = {
  setOrders,
  getOrders,
  getAllOrders
};
