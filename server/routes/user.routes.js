var router =require("express").Router();
const controllers = require("../controllers/User.controller")
router.post("/register", controllers.register)
router.post("/login",controllers.login)
module.exports =router