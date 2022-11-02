const forumModel = require("../models/forumModel");

module.exports = {
  getAllForumPosts: (req, res) => {
    const posts = forumModel.getAllForumPosts();
    res.status(200).json(posts);
  },
};
