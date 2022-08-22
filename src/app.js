const express = require('express');

const app = express();

// Middlewares
require('./middlewares/index')(app);

// Routes
app.use('/api', require('./routes'));

module.exports = app;
