// require in Express and controllers
const express = require('express');
const choreController = require('../controllers/choreController');

// create router
const router = express.Router();

// create a route for get chores that fetchs a list of all the chores that have been created
router.get('/chores', choreController.getChores, (req, res) => {
  res.send(200).json(res.locals.choreList);
});

// create a route for sending a new chore's data to the database
router.post('/chores', choreController.createChore, (req, res) => {
  res.send(200).json({});
});

module.exports = router;
