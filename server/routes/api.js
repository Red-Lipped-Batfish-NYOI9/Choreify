// require in Express and controllers
const express = require('express');
const choreController = require('../controllers/choreController');
const groupController = require('../controllers/groupController');
const usersController = require('../controllers/usersController');
const newGroupController = require('../controllers/newGroupController');

// create router
const router = express.Router();

// create a route for get chores that fetchs a list of all the chores that have been created
router.get('/chores', choreController.getChores, (req, res) => {
  console.log('back to api');
  res.status(200).json(res.locals.choreList);
});

// create a route for sending a new chore's data to the database
router.post(
  '/chores',
  choreController.createChore,
  choreController.getChores,
  (req, res) => {
    res.status(200).json(res.locals);
  }
);

router.patch(
  '/chores',
  choreController.updateChore,
  choreController.getChores,
  (req, res) => {
    res.status(200).json(res.locals.choreList);
  }
);

router.delete(
  '/chores',
  choreController.deleteChore,
  choreController.getChores,
  (req, res) => {
    res.status(200).json(res.locals.choreList);
  }
);

// create a rout for getting all group info
router.get('/groups', groupController.getGroups, (req, res) => {
  res.status(200).json(res.locals.groups);
});

// create a rout for getting all users info
router.get('/users', usersController.getUsers, (req, res) => {
  res.status(200).json(res.locals.payload);
});

// create a rout for posting new user info
router.post('/users', usersController.postNewUser, (req, res) => {
  console.log('sending back: ', res.locals.payload);
  res.status(200).json(res.locals.payload);
});

// create a route for new group creations
router.post(
  '/createNewGroup',
  newGroupController.createNewGroup,
  (req, res) => {
    res.status(200).json(res.locals.newGroup);
  }
);

module.exports = router;
