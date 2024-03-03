const express = require("express");

const router = express.Router();

const login =  require("../../controller/login/login");

const queries  = require("../../controller/queries/queries");


router.post("/loginpage", login.login);             //tested

router.post("/registerpage",login.register);        //tested
 
router.post("/announcements",login.announcement)

router.post("/noticepage",login.notice)             //tested

router.get("/announcements",queries.getAnnouncements)

router.get("/users",queries.getUsers)                  //tested

router.get("/notices",queries.getNotices)           //tested

router.post("/profile",queries.userProfile)         //tested

router.put("/updatepassword",login.updatePassword)      //tested




module.exports = router;
