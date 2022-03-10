var router = require("express").Router();
const controllers= require("../controllers/Posts.controller.js")
router.post("/Post",controllers.insertPost)
router.get("/getpost",controllers.getpost)
router.get("/getPostid/:id_Post",controllers.getPostid)
router.get("/getpostusername",controllers.getpostusername)



module.exports=router