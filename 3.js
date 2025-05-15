const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/hello') {
    res.end('Hi there!');
  } else if (req.url === '/bye') {
    res.end('Goodbye!');
  } else {
    res.end('Unknown Route');
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
