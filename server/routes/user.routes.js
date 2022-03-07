var router =require("express").Router();
const controllers = require("../controllers/User.controller")
router.post("/register", controllers.register)
router.post("/login",controllers.login)
router.get("/info/:id_User",controllers.getUserInfo)
module.exports =router