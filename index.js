const express = require("express");
require("dotenv").config();
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const categoryRoute = require("./routes/categoryRoute");
const productRoute = require("./routes/productRoute");
const connectToMongo = require("./config/db");
const path = require("path");

const bodyParser = require("body-parser");
const app = express();

app.use(express.json());
app.use(cors());
// configure the app to use bodyParser()
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
// Database connection
connectToMongo();

// User Route
app.use("/api/v1/auth/", userRoute);

// Category Route
app.use("/api/v1/category/", categoryRoute);

// Product Route
app.use("/api/v1/product/", productRoute);

// static files
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Listen server
app.listen(process.env.PORT, () => {
  console.log(`Server is Running on Port  ${process.env.PORT}`);
});
