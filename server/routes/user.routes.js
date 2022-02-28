const router =require("express").Router();
const controllers = require("../controllers/User.controller")
router.post("/signUp",controllers.signUp)
router.post("/signIn",controllers.signUp)

module.exports =router