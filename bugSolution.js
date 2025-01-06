const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  try {
    const data = fs.readFileSync('/path/to/file');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(data);
  } catch (err) {
    console.error('Error reading file:', err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});