const pollingModel = require("../models/pollingModel");

module.exports = {
  getAllPolls: (req, res) => {
    const polls = pollingModel.getAllPolls(req.query);
    res.status(200).json(polls);
  },
  getSinglePoll: (req, res) => {
    const poll = pollingModel.getSinglePoll(req.params.id);
    res.status(200).json(poll);
  },
  editPollDetails: (req, res) => {
    const poll = pollingModel.editPollDetails(req.params.id, req.body);
    res.status(200).json(poll);
  },
  deletePoll: (req, res) => {
    const poll = pollingModel.deletePoll(req.params.id);
    res.status(200).json(poll);
  },
  addPoll: (req, res) => {
    const polls = pollingModel.addPoll(req.body);
    res.status(201).json(polls);
  },
  addComment: (req, res) => {
    const comments = pollingModel.addComment(req.body);
    res.status(201).json(comments);
  },
};
