const express =  require("express");

const app =  express();


//Request handler

//when we hit hello in browser(making req) then server will response(Go to home page) 
app.use("/hello",(req,res)=>{ 
    res.send("Go to home page ")
});

app.use((req,res)=>{
    res.send("when make a request then response ok ")
});


app.listen(3000,()=>{
    console.log("server is started");
});