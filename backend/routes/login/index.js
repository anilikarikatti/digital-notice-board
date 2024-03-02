const express = require("express");

const router = express.Router();

const login =  require("../../controller/login/login");

const queries  = require("../../controller/queries/queries");


router.post("/loginpage", login.login);

router.post("/registerpage",login.register);
 
router.post("/announcements",login.announcement)

router.post("/noticepage",login.notice)

router.get("/announcements",queries.getAnnouncements)

router.get("/users",queries.getUsers)

router.get("/notices",queries.getNotices)


module.exports = router;
