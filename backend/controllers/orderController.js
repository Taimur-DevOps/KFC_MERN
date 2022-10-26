const Orders = require("../models/orderModel");
const asyncHandler = require("express-async-handler");

//@desc  Get Products
//@route GET/api/products
//@access Private
const setOrders = async (req, res) => {
  const { userid, item } = req.body;
  // console.log(req.body);
  // console.log("this is order controller");

  try {
    // console.log("the output is ", req.body.category);
    const Data = await Orders.create({
      user: userid,
      cart: item,
    });
    Data.save();
    // console.log(Data);
    res.status(200).json(Data);
  } catch (error) {
    res.status(400).json(error.message);
    console.log(error);
  }
};

// single user order history
const getOrders = async (req, res) => {
  // console.log(req.user._id);
  try {
    const Data = await Orders.find({ user: req.user._id })
      .sort({ createdAt: -1 })
      .lean();
    res.status(200).json(Data);
  } catch (error) {
    res.status(400).json(error.message);
    console.log(error);
  }
};

// fetching all the orders from all users
const getAllOrders = asyncHandler(async (req, res) => {
  try {
    const orders = await Orders.find()
      .populate("user")
      .sort({ createdAt: -1 })
      .lean();
    // console.log("All Orders>>>: ", orders);

    res.status(200).send(orders);
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

// For Dashboard Records
const orderHistory = asyncHandler(async (req, res) => {
  try {
    // const orders = await Orders.find().sort( { "createdAt": -1 } )
    const orders = await Orders.aggregate([
      {
        $group: {
          _id: {
            date: { $dateToString: { format: "%d-%m-%Y", date: "$createdAt" } },
            // moment(item.createdAt).format("DD-MM-YYYY")
          },
          data: {
            $push: "$cart",
          },
        },
      },
    ]);
    const date = [];
    const totals = [];

    orders.forEach((item) => {
      date.push(item._id.date);
      let total = 0;
      const cartItems = item.data.flat();
      cartItems.forEach((_item) => {
        total += _item.total;
      });
      totals.push(total);
    });
    console.log("All Orders>>>sssss: ", date, totals);
    res.status(200).send({
      dates: date,
      totals: totals,
    });
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

module.exports = {
  setOrders,
  getOrders,
  getAllOrders,
  orderHistory,
};
