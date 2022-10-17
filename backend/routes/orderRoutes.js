const express = require("express");
const router = express.Router();
const {protect} = require('../middleware/authMiddleware')

const { setOrders,getOrders,getAllOrders } = require("../controllers/orderController");

router.post("/", setOrders);

router.get("/", protect,  getOrders)


router.get('/getAllOrders', getAllOrders)

module.exports = router;

