const router = require("express").Router();

const controller = require("../controllers/pollingController");

router.get("/", controller.getAllPolls);

module.exports = router;
