const express = require("express");

const router = express.Router();

const login =  require("../../controller/login/login");

const queries  = require("../../controller/queries/queries");

const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage })


// const upload = multer({ dest: 'uploads/' })



router.post("/loginpage", login.login);             //tested

router.post("/registerpage",login.register);        //tested
 
router.post("/announcements",upload.single('file') ,login.announcement)

router.post("/addNotice",login.notice)             //tested

router.get("/announcements",queries.getAnnouncements)

router.get("/users",queries.getUsers)                  //tested

router.get("/notices",queries.getNotices)           //tested

router.get("/profile",queries.userProfile)         //tested

router.put("/updatepassword",login.updatePassword)      //tested

router.get("/dashboardData",queries.Counts)




module.exports = router;
