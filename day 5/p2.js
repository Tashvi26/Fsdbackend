const express=require('express');
const app=express();
app.use(express.json());
let users=[
    {id: 1, name: 'john Doe', age:20},
    {id: 1, name: 'john Doe', age:20},
    {id: 1, name: 'john Doe', age:20},

];
app.get('/users',(req,res)=>{
    res.json(users);
});
app.post('/reg',(req,res)=>{
    const newuser= req.body;
    const newid=users.length>0?users[users.length-1].id+1:1;
     const {username,password}=req.body;
     console.log('User ${username} and password ${password} received')
     res.json({message:"data received"});
    })
app.listen(9000,()=>
{
    console.log('server is running on port 9000');
});