// Create web server

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const app = express();
const port = 3000;

// Use body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use express-validator
app.use(expressValidator());

// Import routes
const comments = require('./routes/comments');

// Use routes
app.use('/comments', comments);

// Start web server
app.listen(port, () => console.log(`Listening on port ${port}!`));