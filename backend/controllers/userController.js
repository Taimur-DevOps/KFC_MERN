const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Joi = require("joi");

const SignupSchema = Joi.object().keys({
  name: Joi.string().max(24).required(),
  email: Joi.string().trim().email().required(),
  password: Joi.string().min(6).max(10).required(),
  password2: Joi.ref("password"),
});

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const { error, value } = SignupSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    res.status(400);
    console.log(error);
    throw new Error(error);
    // return res.json(error.details);
  }

  //if empty fields
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  // Check if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,

      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check for user email
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// fetch all the users
const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    console.log("ALL USERS>>>>>>>>", users);
    res.status(200).send(users);
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

//  Delete specific user by ID 
const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const userId = await User.findByIdAndDelete(id);
    res.send(userId);
    console.log("the User is deleted");
  } catch (error) {
    res.status(400).json(error.message);
    console.log(error);
  }
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
  deleteUser,
  getAllUsers,
};
