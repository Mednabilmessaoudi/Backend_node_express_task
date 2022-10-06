const express=require("express")
const app=express()
const users=require('./data/FakeApi')
app.use(express.json())

const port=5001 


app.get('/users',(req,res)=>{ 
    res.send(users);
    })

/////ADD
app.post('/post',(req,res)=>{
    let uuid = uuidv4();
    const newuser = {id : uuid, ...req.body};
    users.push(newuser);
    res.send(users);


})

///update

app.put('/update/:id',(req,res)=>{
    const {id}= req.params
    const oldUser= users.find((e)=> e.id==id)
    const updatedUser = {...oldUser ,...req.body}
    res.send(updatedUser)




})



//delete
app.delete ('/delete/:id', (req, res) => {
    const {id}= req.params
        const newUsers= users.filter(e=> e.id !=id) 
    res.send(newUsers)
    })








    
//affichage
app.listen(port,err=>
{err?console.log(err):console.log(`server is running on  http://localhost:${port}`);;})

