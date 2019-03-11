const http = require('http');
const port = 3000;

const MongoClient = require('mongodb').MongoClient;
let mongodb;
let url = 'mongodb://localhost:27017';

MongoClient.connect(url, { useNewUrlParser: true }, (error, db) => {
  if (error) {
    console.log('MongoDB error connection');
  } else {
    console.log('MongoDB connection successful');
    mongodb = db;
  }
});

const server = http.createServer((req, res) => {
  let id = JSON.parse(req.url.slice(10));
  if (req.url === `/explores/${id}` && req.method === 'GET') {
    let explores = mongodb.db('explore').collection('explores');
    explores.findOne({ productId: id }, (error, data) => {
      if (error) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end();
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));
      }
    });
  }
});

server.listen(port, () => console.log(`Listening on http://localhost:${port}`));
