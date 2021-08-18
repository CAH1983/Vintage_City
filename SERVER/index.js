// server/index.js
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const path = require('path');
const collectors = require('../FrontEnd/src/DataFrontEnd/CollectorsData');

// ROUTES
app.get('/api', (req, res) => res.json({ message: 'Hello from server...' }));

// Grab data for the collectors page (?)
app.get('/api/collectors', (req, res) => res.json({ collectors }));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
