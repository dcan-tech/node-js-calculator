const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const logger = require('./logger'); // Winston logger

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

// 404 Handler - Warning Logging
app.use((req, res) => {
  logger.warn(`404 - Not Found: ${req.originalUrl}`);
  res.status(404).send('404: Page Not Found');
});

// Start the server
app.listen(port, () => {
  console.log(`Calculator app listening at http://localhost:${port}`);
  logger.info(`Server running on port ${port}`);
});
