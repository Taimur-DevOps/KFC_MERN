const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("colors");
const connectDB = require("./config/config");
const dotenv = require("dotenv");
const { errorHandler } = require("./middleware/errorMiddleware");
const { urlencoded } = require("express");

//config dotenv
dotenv.config();

//connection mongodb
connectDB();

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));

//route
// app.get("/api/products", (req, res) => {
//   res.status(200).json({message:"getProducts"});
// });

//setting up the routes
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/orders",require("./routes/orderRoutes"))
app.use(errorHandler);

app.use("/images", express.static("images"));

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on ${port} `.bgGreen.white);
});
