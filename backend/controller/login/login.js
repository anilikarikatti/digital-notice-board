// const dataBase = require("../../config/dbConfig");

const { databases } = require("../../config/dbConfig");

//Login authentication

const login = async (req, res) => {
 
  let {email,password} = req.body
  let data =  await databases.users.findOne({where:{"email":email}})

  console.log(email,"**",password)
  console.log(data.email,"**")
  if(data.email==email){
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
};

const updatePassword = async (req,res)=>{
  let {email,newPassword} = req.body
  // let data = await databases.users.findOne({where:{"email":email}})

  try{
    let resp = await databases.users.Update({password:newPassword},{where:{"email":email}})
    res.status(200).send("Password changed successfully" )
  }
  catch{
    res.send("Something wrong")
  }
  
}
//User Registration table

const register = async (req,res)=>{

  let {name,email,password,MobileNumber,Designation}=req.body

  // console.log("**",name , email, password,  MobileNumber,"**")

  try{
    let resp = await databases.users.create({
      "name":name ,
      "email": email,
      "password": password,
      "MobileNumber": MobileNumber,
      "Designation": Designation
    });
    res.send(resp)
    console.log(resp)
  }
  catch(err){
    res.send('Email or MobileNumber aready exist',)
  }  
}

//Announcement table

const announcement = async (req,res)=>{
  console.log(await databases.announcements.findAll())

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
    res.send('Announcement Already Exist')
  }  
}

const notice = async (req,res)=>{

  let {notice_url, end_date, status} = req.body

  try{
    let resp = await databases.notices.create({
      "notice_url":notice_url,
      "end_date": end_date,
      "status": status,
    });
    res.send(resp)
    // console.log(resp)
  }
  catch(err){
    res.send('File Already Exist')
  }  
}


module.exports = { login, register,announcement, notice, updatePassword};



