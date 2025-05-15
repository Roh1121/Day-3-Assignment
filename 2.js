const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/time') {
    const currentTime = new Date().toLocaleTimeString();
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Current Server Time: ${currentTime}`);
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Time server running at http://localhost:${PORT}/`);
});
