// require in Express and controllers
const express = require("express");
const choreController = require("../controllers/choreController");
const groupController = require("../controllers/groupController");
const usersController = require("../controllers/usersController");

// create router
const router = express.Router();

// create a route for get chores that fetchs a list of all the chores that have been created
router.get("/chores", choreController.getChores, (req, res) => {
  console.log("back to api");
  res.status(200).json(res.locals.choreList);
});

// create a route for sending a new chore's data to the database
router.post("/chores", choreController.createChore, (req, res) => {
  res.status(200).json(res.locals.newChore);
});

// create a rout for getting all group info
router.get("/groups", groupController.getGroups, (req, res) => {
  res.status(200).json(res.locals.groups);
});

// create a rout for getting all users info
router.get("/users", usersController.getUsers, (req, res) => {
  res.status(200).json(res.locals.payload);
});

// create a rout for posting new user info
router.post("/users", usersController.postNewUser, (req, res) => {
  res.status(200).json(res.locals.payload);
});

module.exports = router;
