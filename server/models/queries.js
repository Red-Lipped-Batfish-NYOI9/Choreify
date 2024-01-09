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

queries.getAllGroups = ('SELECT * FROM groups FULL OUTER JOIN users_groups ON groups.group_id=users_groups.group_id LEFT JOIN users ON users.user_id=users_groups.user_id;');

queries.createNewGroup = `INSERT INTO groups`
  + `(group_name)`
  + `VALUES($1)`;

module.exports = queries;
