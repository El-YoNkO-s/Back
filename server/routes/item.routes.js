const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.post("/postcomment", itemController.commits);
router.get("/getcomment", itemController.getcommit);

module.exports = router;
