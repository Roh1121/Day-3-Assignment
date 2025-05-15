// Import the http module
const http = require('http');

// Define the port number
const PORT = 3000;

// Create the server
const server = http.createServer((req, res) => {
  res.statusCode = 200;             // Set status to OK
  res.setHeader('Content-Type', 'text/plain'); // Set response type
  res.end('Hello, World!');         // Send response
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
