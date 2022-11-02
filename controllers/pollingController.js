const pollingModel = require("../models/pollingModel");

module.exports = {
  getAllPolls: (req, res) => {
    const polls = pollingModel.getAllPolls();
    res.status(200).json(polls);
  },
};
