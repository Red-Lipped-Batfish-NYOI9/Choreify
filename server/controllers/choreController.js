const db = require('../models/choreifyModels');
const queries = require('../models/queries');

const choreController = {};

choreController.getChores = (req, res, next) => {
<<<<<<< Updated upstream
  db.query(queries.getAllChores).then((data) => {
    if (data) {
      // eslint-disable-next-line prefer-destructuring
      res.locals.choreList = data.rows;
      // console.log('in getChores', res.locals.choreList);
      next();
    } else {
      next({ err: 'Problem fetching chores from database' });
    }
  });
=======
  db.query(queries.getAllChores)
    .then((data) => {
      if (data) {
        // eslint-disable-next-line prefer-destructuring
        console.log("DATA.ROWS ~~~~~~~~~~~~~~~~", data.rows);
        res.locals.choreList = data.rows;
        next();
      } else {
        next({ err: 'Problem fetching chores from database' });
      }
    });
>>>>>>> Stashed changes
};

choreController.createChore = (req, res, next) => {
  // paramaterize the query
  // console.log(req.body);
  // const arr = [title, description, group_id, chore_status, due_date, assigner_id,
  // created_date] = req.body;
  // console.log(arr);
  const newChoreData = req.body;
  console.log('reached createChore Controller ');
  // const arr = ['feed the cat', 'feed the cat her favorite cat food', 1, 'assigned', 'end of the week', 1, (new Date()).toLocaleString('en-US')];
  // pass the params into the function that will insert them in the query
  // then insert them into the database using db.query
  db.query(queries.createChore, newChoreData).then((data) => {
    if (data.rows) {
      console.log('this is data rows', data.rows);
      // res.locals.newChore = data.rows; // may need to see what this function actually returns
      next();
    } else {
      next({ err: 'Problem creating new chore in database' });
    }
  });
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
