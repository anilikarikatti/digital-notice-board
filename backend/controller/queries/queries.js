const { databases } = require("../../config/dbConfig");

const getAnnouncements = async (req,res)=>{
    let data = databases.announcements
    
    let announcement = {
        "all" : await data.findAll({}),
        // "active" : await data.findAll({attributes:["announcement"],
        //                                     where:{"status":1}}),
        // "inactive" : await data.findAll({attributes:["announcement"],
        //                                     where:{"status":0}}),
        // "validity" : await data.findAll({attributes:["annoucement","end_date"]})
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
    let {email} = req.query
    let user = {
        "profile" : await databases.users.findAll({attributes:['name','email','MobileNumber','Designation'],where:{"email":email}})
    }
    res.send(user.profile)
}

const getNotices = async (req,res)=>{
    let data = databases.notices
    
    let notice = {
        // "all" : await data.findAll({}),

        "active" : await data.findAll({
                                            where:{"status":1}}),

        // "inactive" : await data.findAll({attributes:["notice_name"],
        //                                     where:{"status":0}}),

        // "validity" : await data.findAll({attributes:["notice_name","end_date"]})
        
    }

    res.send(notice.active)
}

const Counts = async(req,res) =>{
    try{
        let noticeCount = {
            "notice" : await databases.notices.count({col:'notice_name'})
        }

        let eventCount = {
            "event" : await databases.announcements.count({col:'announcement'})
        }
        
        let activeNoticeCount = {
            "activeNotice" : await databases.notices.count({where:{"status":1}})
        }

        let activeEventCount = {
            "activeEvent" : await databases.announcements.count({where:{"status":1}})
        }

       

        let count = {...noticeCount , ...eventCount , ...activeNoticeCount , ...activeEventCount}

        // console.log(noticeCount,"*")
        // console.log(activeNoticeCount,"*")

        res.send(count)
    }
    catch(err){
        res.send(err)
    }
}

module.exports = {getAnnouncements,getUsers,getNotices,userProfile , Counts};