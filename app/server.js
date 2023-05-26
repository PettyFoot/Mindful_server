const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

// Create an instance of the Express application
const app = express();

app.use(bodyParser.json());

// Mount the user routes
app.use('/api/users', userRoutes);

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});