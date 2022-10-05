const express = require("express");
const router = express.Router();
const {protect} = require('../middleware/authMiddleware')

const { setOrders,getOrders } = require("../controllers/orderController");

router.post("/", setOrders);

router.get("/", protect,  getOrders)

module.exports = router;

