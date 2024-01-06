// require in Express and controllers
const express = require('express');
const choreController = require('../controllers/choreController');

// create router
const router = express.Router();

// create a route for get chores that fetchs a list of all the chores that have been created
router.get('/chores', choreController.getChores, (req, res) => {
  res.status(200).json(res.locals.choreList);
});

// create a route for sending a new chore's data to the database
router.post('/chores', choreController.createChore, (req, res) => {
  res.status(200).json(res.locals.newChore);
});

module.exports = router;
