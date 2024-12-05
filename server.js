const express = require("express");

const app = express();


app.get("/getUserData", (req, res) => {
  //try {
  // Logic of DB call and get user data

  throw new Error("dvbzhjf");
  res.send("User Data Sent");
  //   } catch (err) {
  //     res.status(500).send("Some Error contact support team");
  //   }
});
app.use("/", (err, req, res, next) => { // it will handle all unexpected errors
  if (err) {
    // Log your error
    res.status(500).send("something went wrong");
  }
});

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});

//always use try and catch and at the end of your code use wild card error handling if 

// try cath miss any error then wild card error mrthod will take care 