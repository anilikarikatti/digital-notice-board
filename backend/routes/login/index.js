const express = require("express");

const router = express.Router();

const login = require("../../controller/login/login");

router.post("/name", login.announcement);

module.exports = router;
