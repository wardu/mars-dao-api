const fs = require("fs");

module.exports = {
  getAllForumPosts: () => {
    const rawData = fs.readFileSync("./data/posts.json");
    const posts = JSON.parse(rawData);
    return posts;
  },
};
