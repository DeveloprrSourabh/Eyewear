const mongoose = require("mongoose");
require("dotenv").config();

const connectToMongo = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000, // 10 sec timeout
    })
    .then(() => {
      console.log("✅ Connected to MongoDB Successfully");
    })
    .catch((error) => {
      console.log("❌ MongoDB Connection Error:", error);
    });
};

module.exports = connectToMongo;
