/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
const queries = {};

// eslint-disable-next-line arrow-body-style
queries.getAllChores = ('SELECT * FROM chores;');

queries.createChore = (
  `INSERT INTO chores `
    + `(title, description, group_id, chore_status, due_date, assigner_id, created_date) `
    + `VALUES ($1, $2, $3, $4, $5, $6, $7);`
);

queries.getAllGroups = ('SELECT * FROM groups;');

module.exports = queries;
