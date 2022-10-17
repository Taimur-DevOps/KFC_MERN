const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
  

    // price: {
    //   type: Number,
    //   required: true,
    // },

   

    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },

    cart: {
      type: Object,
      required: true,
    },

    
    // address: {
    //   type: String,
    //   required: true,
    // },
  },
  { timestamps: true }
);

const Orders = mongoose.model("Orders", orderSchema);
module.exports = Orders;
