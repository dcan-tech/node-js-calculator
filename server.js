const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const logger = require('./logger'); 
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;



// Use Helmet to add security headers to the responses
app.use(helmet());

// Morgan for HTTP request logging with response time, integrated with Winston
app.use(morgan(function (tokens, req, res) {
  return tokens.method(req, res) + ' ' +
    tokens.url(req, res) + ' ' +
    tokens.status(req, res) + ' ' +
    tokens['response-time'](req, res) + 'ms';
}, { stream: logger.stream }));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Home Route - Informational Logging
app.get('/', (req, res) => {
  logger.info('Home page accessed');
  res.sendFile(__dirname + '/index.html'); // Adjust if your home page is named differently
});

// About Route - Informational Logging
app.get('/about', (req, res) => {
  logger.info('About page accessed');
  res.sendFile(__dirname + '/about.html');
});

// Centralized Error Handling Middleware
app.use((err, req, res, next) => {
  logger.error(`Error occurred: ${err.message}`);
  res.status(500).send('Internal Server Error');
});

// 404 handles requests that do not match files or routes
app.use((req, res, next) => {
  res.status(404);

  // Respond with html page if the request accepts html, otherwise send text response
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'public', '404.html'));
    return;
  }

  res.type('txt').send('404 - Not Found');
});

// Start the server
app.listen(port, () => {
  console.log(`Calculator app listening at http://localhost:${port}`);
  logger.info(`Server running on port ${port}`);
});
