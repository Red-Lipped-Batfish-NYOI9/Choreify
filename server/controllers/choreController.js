const db = require('../models/choreifyModels');
const queries = require('../models/queries');

const choreController = {};

choreController.getChores = (req, res, next) => {
  db.query(queries.getAllChores)
    .then((data) => {
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
  // paramaterize the query
  // console.log(req.body);
  // const arr = [title, description, group_id, chore_status, due_date, assigner_id,
  // created_date] = req.body;
  // console.log(arr);

  const arr = ['feed the cat', 'feed the cat her favorite cat food', 1, 'assigned', 'end of the week', 1, (new Date()).toLocaleString('en-US')];
  // pass the params into the function that will insert them in the query
  // then insert them into the database using db.query
  db.query(queries.createChore, arr)
    .then((data) => {
      if (data.rows) {
        res.locals.newChore = data; // may need to see what this function actually returns
        next();
      } else {
        next({ err: 'Problem creating new chore in database' });
      }
    });
};

module.exports = choreController;
