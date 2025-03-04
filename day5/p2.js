const express = require('express');


const app = express();
app.use(express.json());
let users=[
    {id:1,name:'John',age:25},
    {id:2,name:'Jane',age:30},
    {id:3,name:'Bob',age:35}
];
app.get('/users',(req,res)=>{
    res.send(users);
});

// app.post('/post',(req,res)=>{
//     const {username,password}=req.body;
//     console.log(user ${username} and password ${password} recived)
//     res.json({message:"data recived"});

// });
app.post('/reg',(req,res)=>{
    const newuser=req.body;
    const newid=users.length>0 ? users[users.length-1].id+1 : 1;
    newuser.id=newid;
    users.push(newuser);
    res.json(newuser);
})
app.listen(9000,() => {
    console.log('server is running on port 9000');
});