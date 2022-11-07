const router = require("express").Router();

const {
  getAllPolls,
  addPoll,
  getSinglePoll,
  editPollDetails,
  deletePoll,
} = require("../controllers/pollingController");

router.get("/", getAllPolls);

router.get("/:id", getSinglePoll);

router.put("/id", editPollDetails);

router.delete("/:id", deletePoll);

router.post("/", addPoll);

module.exports = router;
