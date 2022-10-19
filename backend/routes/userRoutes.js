const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getMe,
  getAllUsers,
  deleteUser,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", getMe);

router.get("/getAllUsers", getAllUsers);

router.delete("/:id", deleteUser);

module.exports = router;
