const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://7974manojsingh:CVfiKYmhkCFGhlv2@namstenode.v7ksp.mongodb.net/devtinder"
  );
};

module.exports = connectDB;