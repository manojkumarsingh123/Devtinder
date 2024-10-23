const express =  require("express");

const app =  express();


//Request handler

//when we hit hello in browser(making req) then server will response(Go to home page)


app.use("/",(req,res)=>{
    res.send("Home")
})

// or app.use((req,res)=>{
//     res.send("when make a request then response ok ")
// });

app.use("/hello",(req,res)=>{ 
    res.send("Go to home page ")
});

app.use("/test",(req,res)=>{
    res.send("test")
})



/*here out put will be home for all

Because here in first we used "/" means any request if come http://localhost:3000/ or http://localhost:3000/hello or http://localhost:3000/test

it will go to home only means after / use any thing it will give home only 


but here order of writing routes matters so if the case is



app.use("/hello",(req,res)=>{ 
    res.send("Go to home page ")
});

app.use("/test",(req,res)=>{
    res.send("test")
})

app.use("/",(req,res)=>{
    res.send("Home")
})

and send request 

http://localhost:3000/ >> Home
http://localhost:3000/hello >> Go to home page 
http://localhost:3000/test >> test

If chnaged the order

app.use("/hello",(req,res)=>{ 
    res.send("Go to home page ")
});

app.use("/",(req,res)=>{
    res.send("Home")
})

app.use("/test",(req,res)=>{
    res.send("test")
})

http://localhost:3000/ >> Home
http://localhost:3000/hello >> Go to home page 
http://localhost:3000/test >> Home

*/
// app.use((req,res)=>{
//     res.send("when make a request then response ok ")
// });


app.listen(3000,()=>{
    console.log("server is started");
});