// Import the necessary modules
const userModel = require('../models/userModel');

// Handle user registration from Android app
exports.registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Perform additional validation and error handling if required

    // Create a new user in the database
    await userModel.createUser(username, password);

    return res.json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Handle user creation
exports.createUser = async (req, res) => {
  try {
    const username = req.body.username;

    const userExists = await userModel.checkUserExists(username);

    if (userExists) {
      return res.json({ message: 'User already exists' });
    }

    await userModel.createUser(username);

    return res.json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
