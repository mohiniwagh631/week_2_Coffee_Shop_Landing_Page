const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://mohiniwagh631_db_user:yT0zyPFPV3EnalYo@coffeecluster.hcukfoi.mongodb.net/coffee_shop?retryWrites=true&w=majority&appName=CoffeeCluster"
    );

    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("Database Connection Failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;