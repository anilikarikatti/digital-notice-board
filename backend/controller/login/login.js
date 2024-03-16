// const dataBase = require("../../config/dbConfig");

const { databases } = require("../../config/dbConfig");

//Login authentication

const login = async (req, res) => {
 
  let {email,password} = req.body
  let data =  await databases.users.findOne({where:{"email":email}})

  try{
    if(data.email == email){   
      console.log("** email checked **")
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
  }
  catch{
    res.send("Incorrect email")
  }
 
};

const updatePassword = async (req,res)=>{
  let {email,newPassword} = req.body

  try{
    await databases.users.update({ password: newPassword }, {
      where: {
        "email": email,
      },
    });
    res.send("Password changed successfully" )
  }
  catch(err){
    res.send("Try Again!")
  }
  
}
//User Registration table

const register = async (req,res)=>{

  let {name,email,password,MobileNumber,Designation}=req.body

  console.log("**",name , email , password ,  MobileNumber , Designation ,"**")

  try{
    let resp = await databases.users.create({
      "name":name ,
      "email": email,
      "password": password,
      "MobileNumber": MobileNumber,
      "Designation": Designation,
    });
    res.send(resp)
    console.log(resp)
  }
  catch(err){
    res.send(err)
  }  
}


const announcement = async (req,res)=> {

  console.log("**************coming here");

  let {filename} = req.file
  let {name , startDate, endDate  } = req.body


  try {
    let resp = await databases.announcements.create({
      "announcement":name,
      "end_date": endDate,
      "start_date":startDate,
      "url":filename
      });

    res.send(resp)
    console.log(resp)
  }
  catch(err){
    res.send(err)
  }  
}

const notice = async (req,res)=>{

  let {name,description,startDate, endDate} = req.body

  try{
    let resp = await databases.notices.create({
      "notice_name":name,
      "description":description,
      "start_date": startDate,
      "end_date": endDate,
      "status": 1,
    });
    res.status(200).send(resp)
    console.log(resp)
  }
  catch(err){
    res.send(err)
  }  
}


module.exports = { login, register,announcement, notice, updatePassword };



