const db = require('../models/choreifyModels');
const queries = require('../models/queries');

const choreController = {};

choreController.getChores = (req, res, next) => {
  db.query(queries.getAllChores).then((data) => {
    if (data) {
      // eslint-disable-next-line prefer-destructuring
      res.locals.choreList = data.rows;
      next();
    } else {
      next({ err: 'Problem fetching chores from database' });
    }
  });
};

choreController.createChore = (req, res, next) => {
  // const arr = [
  //   'feed the dog',
  //   'feed the dog her favorite dog food',
  //   1,
  //   'assigned',
  //   'end of the week',
  //   1,
  //   new Date().toLocaleString('en-US'),
  // ];
  const newChoreData = req.body;
  console.log('reached createChore Controller ');

  // pass the params into the function that will insert them in the query
  // then insert them into the database using db.query
  db.query(queries.createChore, newChoreData).then((data) => {
    if (data.rows) {
      res.locals.newChore = data;
      console.log('this is res.locals.newChore', res.locals.newChore);
      // may need to see what this function actually returns
      next();
    } else {
      next({ err: 'Problem creating new chore in database' });
    }
  });
};

module.exports = choreController;
