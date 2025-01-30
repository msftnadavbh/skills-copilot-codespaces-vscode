// Create web Server
const express = require('express');
const app = express();
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Create a route for GET /comments
app.get('/comments', (req, res) => {