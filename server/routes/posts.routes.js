var router = require("express").Router();
const controllers= require("../controllers/Posts.controller.js")
router.post("/Post",controllers.insertPost)
router.get("/getpost",controllers.getpost)



module.exports=router