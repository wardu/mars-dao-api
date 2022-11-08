const fs = require("fs");

const getPolls = () => {
  const fileContent = fs.readFileSync("./data/polling.json");
  return JSON.parse(fileContent);
};
const getCommentss = () => {
  const fileContent = fs.readFileSync("./data/comments.json");
  return JSON.parse(fileContent);
};

const getSelectedPoll = (id) => {
  const polls = getPolls();
  const selected = polls.findIndex((poll) => poll.id === id);
  return selected;
};

module.exports = {
  getPolls,
  getSelectedPoll,
};
