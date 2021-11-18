const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application.json; charset=utf-8;' });
  // res.write('hello ');
  res.end(JSON.stringify({ body: 'hello world' }));
});

server.listen(3000, () => {
  console.log('started ...');
});
