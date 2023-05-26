// Import the necessary modules
const userModel = require('../models/userModel');

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
