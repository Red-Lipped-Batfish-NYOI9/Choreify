const db = require(('../models/choreifyModels'));
const queries = require('../models/queries');

const newGroupController = {};

newGroupController.createNewGroup = (req, res, next) => {
  console.log(req.body);
  const arr = [req.body.groupName];
  console.log("INSIDE CONTROLLERS")
  db.query(queries.createNewGroup, arr)
    .then((data) => {
      if (data.rows) {
        res.locals.newGroup = data;
        return next();
      }
      return next({ err: 'Problem creating new group in database' });
    });
};

module.exports = newGroupController;
