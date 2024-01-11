const { errorMonitor } = require('events');
const db = require('../models/choreifyModels');
const queries = require('../models/queries');

const choreController = {};

choreController.getChores = (req, res, next) => {
  db.query(queries.getAllChores)
    .then((data) => {
      if (data) {
        res.locals.choreList = data.rows;
        return next();
      } else {
        return next({ err: 'Problem fetching chores from database' });
      }
    })
    .catch((err) => {
      return next(err);
    });
};

choreController.createChore = (req, res, next) => {
  const newChoreData = req.body;
  db.query(queries.createChore, newChoreData)
  .then((data) => {
    if (data.rows) {
      // res.locals.newChore = data.rows;
      return next();
    } else {
      return next({ err: 'Problem creating new chore in database' });
    }
  })
  .catch((err) => {
    return next(err);
  })
};

module.exports = choreController;
