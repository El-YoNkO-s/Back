var router =require("express").Router();
const controllers = require("../controllers/User.controller")
router.post("/register", controllers.register)
router.post("/login",controllers.login)
// =======
// const router =require("express").Router();
// const controllers = require("../controllers/User.controller")
// router.post("/signUp",controllers.signUp)
// router.post("/signIn",controllers.signUp)

// >>>>>>> main
module.exports =router