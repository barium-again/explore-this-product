const http = require('http');
const handleRequest = require('./request-handler.js');
const port = 3001;
const ip = '127.0.0.1';
const server = http.createServer(handleRequest.requestHandler);
console.log('Listening on http://' + ip + ':' + port);
server.listen(port);
