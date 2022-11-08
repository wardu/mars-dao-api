const fs = require("fs");
const crypto = require("crypto");
const helpers = require("../utils/helpers");

module.exports = {
  getAllPolls: () => {
    let polls = helpers.getPolls();
    return polls;
  },
  addPoll: (poll) => {
    let polls = helpers.getPolls();

    const newPoll = {
      id: crypto.randomBytes(16).toString("hex"),
      pollDate: new Date(),
      pollTitle: poll.pollTitle,
      pollBody: poll.pollBody,
      pollTags: [...poll.pollTags],
      voteFor: 0,
      voteAbstain: 0,
      voteAgainst: 0,
    };
    polls.push(newPoll);

    fs.writeFileSync("./data/polling.json", JSON.stringify(polls));
    return polls;
  },
  editPollDetails: (params, body) => {
    const polls = helpers.getPolls();
    const id = params.id;

    const selected = helpers.getSelectedPoll(id);

    polls[selected] = {
      id: id,
      pollDate: poll.pollDate,
      pollTitle: body.pollTitle,
      pollBody: body.pollBody,
      pollTags: [...body.pollTags],
      voteFor: poll.voteFor,
      voteAbstain: poll.voteAbstain,
      voteAgainst: poll.voteAgainst,
    };

    // write to file
    fs.writeFileSync("./data/polling.json", JSON.stringify(polls));
    return polls;
  },

  deletePoll: (id) => {
    const polls = helpers.getPolls();
    const selected = helpers.getSelectedPoll(id);
    polls.splice(selected, 1);

    // write to file
    fs.writeFileSync("./data/polling.json", JSON.stringify(polls));
    return polls;
  },

  getSinglePoll: (id) => {
    const polls = helpers.getPolls();
    const selected = helpers.getSelectedPoll(id);
    return polls[selected];
  },
  addComment: (comment) => {
    let comments = helpers.getComments();

    const newComment = {
      id: crypto.randomBytes(16).toString("hex"),
      pollId: "Test ID",
      timeStamp: new Date(),
      user: "test",
      comment: comment,
      upVotes: 0,
      downVotes: 0,
    };
    comments.push(newComment);

    fs.writeFileSync("./data/comments.json", JSON.stringify(comments));
    return comments;
  },
};
