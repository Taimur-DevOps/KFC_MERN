const express = require("express");
const router = express.Router();
const {
  getProducts,
  setProducts,
  updateProducts,
  deleteProducts,
} = require("../controllers/productController");

router.post("/", getProducts);
router.post("/add", setProducts);
router.put("/update/:id", updateProducts);
router.delete("/:id", deleteProducts);

module.exports = router;
