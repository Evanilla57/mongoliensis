const router = require("express").Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController.js");

// /api/users
// Get all and post route
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
// Single user, delete, and put routes
router.route("/:userId").get(getSingleUser).delete(deleteUser).put(updateUser);

// /api/users/:userId/friends/:friendId
// Add and delete friend routes
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;