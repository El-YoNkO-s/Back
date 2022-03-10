const router = require('express').Router();
const itemController = require("../controllers/item.controller");


// router.get("/", itemController.selectAll);

router.post("/postcomment", itemController.commits);
router.post("/insertcommit", itemController.insertcommit);
router.get("/getcomment/:id_Post", itemController.getcommit);
router.get("/getpostcomment", itemController.getpostcomment);


module.exports = router;
