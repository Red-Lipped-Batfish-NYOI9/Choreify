const db = require('../models/choreifyModels');
const queries = require('../models/queries');

const groupController = {};

groupController.getGroups = (req, res, next) => {
  db.query(queries.getAllGroups)
    .then((data) => {
      res.locals.groups = data.rows;
      next();
    })
    .catch((err) => next(err));
};

module.exports = groupController;
