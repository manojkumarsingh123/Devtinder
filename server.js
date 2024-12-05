const express = require("express");

const app = express();


// One route can have multiple route handlers
app.use('/user',(req,res,next)=>{
  res.send("hello from first route");
  console.log("From first route")
  next()
},

(req,res,next)=>{
  console.log("From second route")
  res.send("hello from second route");
  
}
)

// here only get first output "hello from first route", and response send to client but 
//console.log("From second route")  this line also execute but when try to send res.send("hello from second route"); second 
// resonse from the same route after send one response we will get an error Cannot set headers after they are sent to the client
//Beacause we already sent one response not allow to send another response for the same route

app.listen(3000);