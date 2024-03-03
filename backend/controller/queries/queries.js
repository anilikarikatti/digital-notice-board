const { databases } = require("../../config/dbConfig");

const getEvents = async (req,res)=>{
    let data = databases.events
    
    let event = {
        "all" : await data.findAll({attributes:["event_name"]}),
        "active" : await data.findAll({attributes:["event_name"],
                                            where:{"status":1}}),
        "inactive" : await data.findAll({attributes:["event_name"],
                                            where:{"status":0}}),
        "validity" : await data.findAll({attributes:["event_name","end_date"]})
    }

    res.send(event.all)
}

const getUsers = async (req,res)=>{
    let users = {
        "all" : await databases.users.findAll({attributes:["name"]})
    }
    res.send(JSON.stringify(users.all))
}

const userProfile = async (req,res)=>{
    let {email} = req.body
    let user = {
        "profile" : await databases.users.findAll({attributes:['name','email','MobileNumber','Designation'],where:{"email":email}})
    }
    res.send(user.profile)
}

const getNotices = async (req,res)=>{
    let data = databases.notices
    
    let notice = {
        "all" : await data.findAll({attributes:["notice_name"]}),

        "active" : await data.findAll({attributes:["notice_name"],
                                            where:{"status":1}}),

        "inactive" : await data.findAll({attributes:["notice_name"],
                                            where:{"status":0}}),

        "validity" : await data.findAll({attributes:["notice_name","end_date"]})
        
    }

    res.send(notice.active)
}

module.exports = {getEvents,getUsers,getNotices,userProfile};