const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

const {
  setOrders,
  getOrders,
  getAllOrders,
  orderHistory,
} = require("../controllers/orderController");

router.post("/", setOrders);

router.get("/", protect, getOrders);

router.get("/getAllOrders", getAllOrders);

router.get("/orderHistory", orderHistory);

module.exports = router;
