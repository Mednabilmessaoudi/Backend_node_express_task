const express = require("express")
const date = require("./Views/MiddleWare/date")

//Init express
const app = express()
//Server Routes
app.get("/",date,(req,res)=>{
    try{
        res.send("<h1>Hello it's Express</h1>")

    }catch(err){
        console.log(err);
    }

})

app.get("/home",(req,res)=>{

    res.sendFile(__dirname+"/Views/home.html")
})

app.listen(5000,err=>{
    err?console.log(err):console.log("Server is running on http://localhost:5000 .. ");;
})