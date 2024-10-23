const express =  require("express");

const app =  express();


//Request handler



//This will only match GET call to "/user" 
app.get("/user",(req,res)=>{
    res.send({firstName:"manoj",lastname:"singh"});
})

//This will only match POST call to "/user"
app.post("/user",(req,res)=>{
    res.send("Successfully posted data");
})

//This will only match DELETE call to "/user"
app.delete("/user",(req,res)=>{
    res.send("Successfully deleted data");
})

/*you can read requested data when send an api and use it later 

let we made a api request 
http://localhost:3000/user?name =manoj

means we passed a parameter name as key and manoj as value  
app.get("/user",(req,res)=>{
    console.log(req.query);// out put will be  { 'name ': 'manoj' }
    res.send({firstName:"manoj",lastname:"singh"});
})

let you requested 
http://localhost:3000/user/107
and want to read 107

app.get("/user/:userid",(req,res)=>{
    console.log(req.params); //output will be { userid: '107' }
    res.send({firstName:"manoj",lastname:"singh"});
})

*/

app.listen(3000,()=>{
    console.log("server is started");
});