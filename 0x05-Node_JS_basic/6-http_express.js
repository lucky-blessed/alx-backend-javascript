const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!'); // Send response
});

app.listen(1245, () => {
  console.log('Server is running on port 1245'); // Log when the server starts
});

module.exports = app;
