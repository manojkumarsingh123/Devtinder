const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://7974manojsingh:dRqCrzdXuqsYxEXN@namstenode.v7ksp.mongodb.net/devtinder"
  );
};

module.exports = connectDB;