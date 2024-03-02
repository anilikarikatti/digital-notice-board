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

  console.log("**",name , email, password,  MobileNumber,Designation,"**")

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

//Announcement table

const announcement = async (req,res)=>{
  // console.log(await databases.announcements.findAll())

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



