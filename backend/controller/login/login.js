// const dataBase = require("../../config/dbConfig");

const { databases } = require("../../config/dbConfig");

//Login authentication

const login = async (req, res) => {
 
  let {email,password} = req.body
  let data =  await databases.users.findOne({"email":email})

  if(data.email==email){
    if(data.password == password){
      res.status(200).send("success")
    }
    else{
      res.send("Password Invalid")
    }
  }
  else{
    res.send("User Not Found")
  }
};

//User Registration table

const register = async (req,res)=>{

  let {name,email,password,MobileNumber}=req.body

  try{
    let resp = await databases.users.create({
      "name":name ,
      "email": email,
      "password": password,
      "MobileNumber": MobileNumber,
    });
    res.send(resp)
    console.log(resp)
  }
  catch(err){
    res.send('Duplicate Entry',)
  }  
}

//Announcement table

const announcement = async (req,res)=>{
  console.log(databases.announcements.findAll())

  let {announcement,end_date,status}=req.body

  try{
    let resp = await databases.announcements.create({
      "announcement":announcement ,
      "end_date": end_date,
      "status": status,
    });
    res.send(resp)
    console.log(resp)
  }
  catch(err){
    res.send('status should be either 0 or 1, 0 for false 1 for true')
  }  
}


module.exports = { login, register,announcement};



