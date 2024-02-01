const express = require("express");

const router = express.Router();

const login =  require("../../controller/login/login");

const queries  = require("../../controller/queries/queries");


router.post("/loginpage", login.login);

router.post("/registerpage",login.register);
 
router.post("/announcements",login.announcement)

router.post("/noticepage",login.notice)

router.get("/announcements",queries.announcementQuery)

router.get("/users",queries.userQuery)

router.get("/notices",queries.noticeQuery)


module.exports = router;
