const express = require("express")
const users = require("./data/users")
const server = express();
const port = 4000

server.use(express.json())


server.get("/getusers",(req,res)=>{
    res.send(users)
})



server.listen(port,err =>{
    err?console.log(err):console.log(`server is running on http://localhost:${port} `);
})