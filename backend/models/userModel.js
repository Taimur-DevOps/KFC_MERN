const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: Array,
      required: [true, "Please add a name"],
      default: [],
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: "Email address is required",
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
    isAdmin:{
      type:Boolean,
      default:false
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
