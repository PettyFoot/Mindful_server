const express = require('express');
const { Pool } = require('pg');

// Create an instance of the Express application
const app = express();

const DB_NAME = "midnful-users";
const DB_HOST = "";
const DB_PASS = "";
const DB_USER = "";


// Create a connection pool for managing database connections
const pool = new Pool({
  user: DB_NAME,
  password: DB_PASS,
  host: DB_HOST,
  database: DB_NAME,
});

// Middleware to make the database connection pool available
app.use((req, res, next) => {
  req.db = pool;
  next();
});



// Example endpoint that retrieves data from the database
app.get('/api/users', async (req, res) => {
  try {
    const db = req.db;

    // Execute a database query
    const result = await db.query('SELECT * FROM users');

    res.json(result.rows);
  } catch (error) {
    console.error('Error retrieving data from the database:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});