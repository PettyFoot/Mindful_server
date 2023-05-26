const db = require('../config/dbConfig');

// Check if the user already exists
exports.checkUserExists = async (username) => {
  const query = 'SELECT * FROM users WHERE username = $1';
  const result = await db.query(query, [username]);

  return result.rows.length > 0;
};

// Create a new user
exports.createUser = async (username) => {
  const insertQuery = 'INSERT INTO users (username) VALUES ($1)';
  await db.query(insertQuery, [username]);
};