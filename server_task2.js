const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    let filePath = '';

    // Check the URL of the current request and set the file path accordingly
    if (req.url === '/') {
      filePath = path.join(__dirname, 'home.html');
    } else if (req.url === '/about') {
      filePath = path.join(__dirname, 'about.html');
    } else if (req.url === '/contact') {
      filePath = path.join(__dirname, 'contact.html');
    } else {
      // If no matches, respond with 404 Not Found
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Not Found');
      return;
    }

    // Read the HTML file
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        // If error reading the file, respond with 500 Internal Server Error
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Internal Server Error');
        return;
      }

      // Set the response header
      res.writeHead(200, {'Content-Type': 'text/html'});
      // Send the response data (HTML content)
      res.end(data);
    });
  } else {
    // If the request method is not GET, respond with 400 Bad Request
    res.writeHead(400, {'Content-Type': 'text/plain'});
    res.end('Bad Request');
  }
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`The NodeJS server on port ${PORT} is now running...`);
});
