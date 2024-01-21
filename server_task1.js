const http = require('http');

// Create a web server with request and response parameters
const server = http.createServer((req, res) => {
  // Check if the request method is GET
  if (req.method === 'GET') {
    // Check the URL of the current request
    if (req.url === '/') {
      // Set the response header
      res.writeHead(200, {'Content-Type': 'text/plain'});
      // Send the response data
      res.end('The NodeJS server on port 5000 is now running...');
    } else if (req.url === '/page1') {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end('<h1>Welcome to Page 1</h1>');
    } else if (req.url === '/page2') {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end('<h1>Welcome to Page 2</h1>');
    } else {
      // If no matches, respond with Invalid Request!
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Invalid Request!');
    }
  } else {
    // If the request method is not GET, respond with Invalid Request!
    res.writeHead(400, {'Content-Type': 'text/plain'});
    res.end('Invalid Request!');
  }
});

// Listen on port 5000
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`The NodeJS server on port ${PORT} is now running...`);
});