const express = require("express");

const app = express();

const { adminAuth, userAuth } = require("./src-file/middlewares/auth");

app.use("/admin", adminAuth); // to handle all route start with /admin , it will first go to the

// adminauth and if token is valid then only move to the line num 11 otherwise give an error

app.post("/user/login", (req, res) => { // if you dont want auth dont use middleware just call the api 
  res.send("User logged in successfully!");
});

app.get("/user/data", userAuth, (req, res) => { // userauth middle take care of all route start with userauth
  res.send("User Data Sent");
});

app.get("/admin/getAllData", (req, res) => {
  res.send("All Data Sent");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("Deleted a user");
});

app.listen(3000, () => {
  console.log("Server is successfully listening on port 7777...");
});