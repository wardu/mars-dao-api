const router = require("express").Router();

const controller = require("../controllers/forumController");

router.get("/", controller.getAllForumPosts);

module.exports = router;
