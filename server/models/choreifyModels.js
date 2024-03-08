const { Pool } = require('pg');

const PG_URI =
  'postgres://aruaifdq:GFKjoC-e3lzP4UqRWEtIoJAj6fYYQddm@castor.db.elephantsql.com/aruaifdq';
// 'postgres://cmiwldsz:kFrRoVqkUvc86m2FjwSL67S7l6tguNyD@stampy.db.elephantsql.com/cmiwldsz';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
