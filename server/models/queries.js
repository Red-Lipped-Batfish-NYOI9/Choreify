/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
const queries = {};

// eslint-disable-next-line arrow-body-style
queries.getAllChores = () => {
  return 'SELECT * FROM chores;';
};

queries.createChore = () => {
  return `INSERT INTO chores `
    + `(title, description, group_id, status, due_date, assigner_id, created_date) `
    + `VALUES ('test chore from backend', 'this was created in our app', 1, 'assigned', 'now', 1, CURRENT_TIMESTAMP);`;
};

export default queries;
