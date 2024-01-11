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
      return next();
    } else {
      return next({ err: 'Problem creating new chore in database' });
    }
  })
  .catch((err) => {
    return next(err);
  })
};

choreController.updateChore = (req, res, next) => {
  const updateChoreData = req.body;
  console.log('reached updateChore Controller with body ', req.body);

  db.query(queries.updateChore, updateChoreData).then((data) => {
    if (data.rows) {
      console.log('this is data rows', data.rows);
      res.locals.updatedChore = data.rows; // may need to see what this function actually returns
      next();
    } else {
      next({ err: 'Problem updating chore in database' });
    }
  });
};

choreController.deleteChore = (req, res, next) => {
  const deleteChoreData = req.body;
  console.log('reached deleteChore Controller with body ', req.body);

  db.query(queries.deleteChore, deleteChoreData).then((data) => {
    if (data.rows) {
      console.log('this is data rows', data.rows);
      res.locals.deletedChore = data.rows; // may need to see what this function actually returns
      next();
    } else {
      next({ err: 'Problem deleting chore in database' });
    }
  })
  .catch((err) => {
    return next(err);
  })
};

choreController.updateChore = (req, res, next) => {
  const updateChoreData = req.body;
  console.log('reached updateChore Controller with body ', req.body);

  db.query(queries.updateChore, updateChoreData).then((data) => {
    if (data.rows) {
      console.log('this is data rows', data.rows);
      res.locals.updatedChore = data.rows; // may need to see what this function actually returns
      next();
    } else {
      next({ err: 'Problem updating chore in database' });
    }
  });
};

choreController.deleteChore = (req, res, next) => {
  const deleteChoreData = req.body;
  console.log('reached deleteChore Controller with body ', req.body);

  db.query(queries.deleteChore, deleteChoreData).then((data) => {
    if (data.rows) {
      console.log('this is data rows', data.rows);
      res.locals.deletedChore = data.rows; // may need to see what this function actually returns
      next();
    } else {
      next({ err: 'Problem deleting chore in database' });
    }
  });
};

module.exports = choreController;
