const express = require("express");

const app = express();


// One route can have multiple route handlers
app.use('/user',(req,res,next)=>{
  res.send("hello from first route");
  console.log("From first route")
},

(req,res,next)=>{
  res.send("hello from second route");
  console.log("From second route")
}
)

// here only get first output "hello from first route", beacuse there is no next and client will response only once

app.listen(3000);