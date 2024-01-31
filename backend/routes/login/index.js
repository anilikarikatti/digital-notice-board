const express = require("express");

const router = express.Router();

const login = register = require("../../controller/login/login");

router.post("/loginpage", login.login);

router.post("/registerpage",login.register);
 
router.post("/announcements",login.announcement)

module.exports = router;
