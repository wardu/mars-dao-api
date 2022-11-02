const fs = require("fs");

module.exports = {
  getAllPolls: () => {
    const rawData = fs.readFileSync("./data/polling.json");
    const polls = JSON.parse(rawData);
    return polls;
  },
};
