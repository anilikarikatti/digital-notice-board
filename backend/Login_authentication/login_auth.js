const express = require ('express')
const app = express()

const UsersDB = require('../models.user')


app.use(express.json());


// app.get('/login',(req,res)=>{

//     let Email=UsersDB.findOne({email:req.body.email})
//     (Email == null) ? res.write('<h3>Email Not found</h3>') : res.write('<h3> Email has been verified</h3>')

//     let Password = UsersDB.findOne({where: {password:req.body.password,email: req.body.email}})
    
//     (Password == null) ? res.send("Wrong Password") : res.send(`Welcome`) 

//     res.end()

// })


app.get('/login',(req,res)=>{
    let {userName,userEmail,userPassword} = UsersDB.findOne({ attributes:['name','email','password'],
                                                            where:{email : req.body.email , password : req.body.password}})
    (userEmail == req.body.email) ? res.write('<h3> Email has been Verified </h3>') : res.write('<h3> Email Not found </h3>')
    (userPassword == req.body.password) ? res.status(200).send(`WelCome ${userName}`) : res.status(400).send("Wrong Pasword");
    res.end()
})

