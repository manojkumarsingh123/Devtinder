const express = require("express");
const connectDB = require("./src-file/config/database");
const app = express();
const User = require("./src-file/models/user");

app.post("/signup", async (req, res) => {
  // Creating a new instance of the User model
  const user = new User({
    firstName: "Sachin",
    lastName: "Tendulkar",
    emailId: "sachin@kohli.com",
    password: "sachin@123",
  });

  try {
    await user.save(); // saving the data in database
    res.send("User Added successfully!"); // after saving the data sending back to the response 
  } catch (err) {
    res.status(400).send("Error saving the user:" + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(3000, () => {
      console.log("Server is successfully listening on port 7777...");
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected!!");
  });