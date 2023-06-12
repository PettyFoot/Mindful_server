const { Pool } = require('pg');

// Create a new pool instance with the database connection details
const pool = new Pool({
  user: '_username',
  password: '_password',
  host: '/cloudsql/_connection_name', // Replace with your Cloud SQL connection name
  database: '_database',
});

// Export the pool object
module.exports = {
  query: (text, params) => pool.query(text, params),
};
