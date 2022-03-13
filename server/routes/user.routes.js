var router =require("express").Router();
const controllers = require("../controllers/User.controller")
router.post("/register", controllers.register)
router.post("/login",controllers.login)
router.get("/info/:id_User",controllers.getUserInfo)
router.get("/selectall",controllers.selectall)
router.get("/selectalluserinfo",controllers.selectall)
router.delete("/deleteuser/:id_User",controllers.deleteuser)
module.exports =router