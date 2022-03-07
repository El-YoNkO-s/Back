const router = require('express').Router();
const itemController = require("../controllers/item.controller");


// router.get("/", itemController.selectAll);

router.post("/postcomment", itemController.commits);
router.get("/getcomment", itemController.getcommit);


module.exports = router;
