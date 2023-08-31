const express = require('express');
const app = express();
const port = 3000; // Choose a port number

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, world! This is your web server.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
