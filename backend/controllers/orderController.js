const Orders = require("../models/orderModel");

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

module.exports = {
  setOrders,
  getOrders,
};
