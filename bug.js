const http = require('http');

const server = http.createServer((req, res) => {
  // Unhandled error in a synchronous part of the request handler
  const data = fs.readFileSync('/path/to/file'); // Might throw an error

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});