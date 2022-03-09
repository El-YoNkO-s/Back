var router = require("express").Router();
const controllers= require("../controllers/Posts.controller.js")
router.post("/Post",controllers.insertPost)
router.get("/getpost",controllers.getpost)
router.get("/getPostid/:id_Post",controllers.getPostid)
router.get("/getUserPost/:id_User",controllers.getUserPost)


module.exports=router