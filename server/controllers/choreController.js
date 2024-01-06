const db = require('/models/choreifyModels.js');
const queries = require('../models/queries.js');

const choreController = {};

choreController.getChores = (res, req, next) => {
  const query = 'SELECT * FROM chores';
  db.query(query)
    .then((data) => {
      if (data.rows) {
        // eslint-disable-next-line prefer-destructuring
        res.locals.choreList = data.rows[0];
        next();
      } else {
        next({ err: 'Problem fetching chores from database' });
      }
    });
};

choreController.createChore = (req, res, next) => {
  const query = 'INSERT INTO chores(description, points, status, group_id)'
  db.query(query);
  // paramaterize the query
  // evaluated result is an object
  // check a specific property to validate insertion success
  // if successful, assign row to res.locals and send that object to reducers
}

module.exports = choreController;
