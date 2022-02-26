const router =require("express").Router();
const controllers = require("../controllers/User.controller")
router.post("/signUp",controllers.signUp)

module.exports =router