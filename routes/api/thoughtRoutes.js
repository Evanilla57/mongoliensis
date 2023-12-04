const router = require("express").Router();

const {
  getThoughts,
  getSingleThought,
  deleteThought,
  updateThought,
  createThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

// /api/thoughts
// Get all thoughts
router.route("/").get(getThoughts);

// /api/thoughts/:thoughtId
// Get single thought by id, delete thought, and update thought
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .delete(deleteThought)
  .put(updateThought);

// /api/thoughts/new-thought/:userId
// Create new thought
router.route("/new-thought/:userId").post(createThought);

// /api/thoughts/:thoughtId/remove-reaction/:reactionId
// Removes a reaction
router.route("/:thoughtId/remove-reaction/:reactionId").delete(deleteReaction);

// /api/thoughts/:userId/add-reaction/:thoughtId
// Adds a reaction
router.route("/:userId/add-reaction/:thoughtId").post(addReaction);

module.exports = router;
