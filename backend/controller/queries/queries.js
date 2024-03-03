const { databases } = require("../../config/dbConfig");

const getAnnouncements = async (req,res)=>{
    let data = databases.announcements
    
    let announcement = {
        "all" : await data.findAll({attributes:["annoucement"]}),
        "active" : await data.findAll({attributes:["announcement"],
                                            where:{"status":1}}),
        "inactive" : await data.findAll({attributes:["announcement"],
                                            where:{"status":0}}),
        "validity" : await data.findAll({attributes:["annoucement","end_date"]})
    }

    res.send(announcement.all)
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
        "all" : await data.findAll({attributes:["notice_url"]}),

        "active" : await data.findAll({attributes:["notice_url"],
                                            where:{"status":1}}),

        "inactive" : await data.findAll({attributes:["notice_url"],
                                            where:{"status":0}}),

        "validity" : await data.findAll({attributes:["notice_url","end_date"]})
        
    }

    res.send(notice.active)
}

module.exports = {getAnnouncements,getUsers,getNotices,userProfile};