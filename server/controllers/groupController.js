const db = require('../models/choreifyModels');
const queries = require('../models/queries');

const groupController = {};

groupController.getGroups = (req, res, next) => {
  console.log("INSIDE CONTROLLER")
  db.query(queries.getAllGroups)
    .then((data) => {
      // turn the groups data into the format we want
      const formatted = [];
      const obj = {};
      for (const row of data.rows) {
        if (!obj.hasOwnProperty(row.group_name)) {
          obj[row.group_name] = { group_id: row.group_id, group_name: row.group_name, members: [row.username] };
        } else {
          obj[row.group_name].members.push(row.username);
        }
      }

      for(const key in obj){
        formatted.push(obj[key]);
      }
      res.locals.groups = formatted;
      next();
    })
    .catch((err) => next(err));
};

module.exports = groupController;
