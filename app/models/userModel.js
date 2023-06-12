const db = require('../config/dbConfig');

// Check if the user already exists
exports.checkUserExists = async (username) => {
  const query = 'SELECT * FROM users WHERE username = $1';
  const result = await db.query(query, [username]);

  return result.rows.length > 0;
};

// Create a new user
exports.createUser = async (username, password) => {
  // Encrypt or hash the password before storing it in the database
  // Example: You can use bcrypt or any other suitable library for password encryption/hashing
  const encryptedPassword = await encryptPassword(password);

  const insertQuery = 'INSERT INTO users (username, password) VALUES ($1, $2)';
  await db.query(insertQuery, [username, encryptedPassword]);
};