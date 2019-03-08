const MongoClient = require('mongodb').MongoClient;

let headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10,
  'Content-Type': 'application/json'
};

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

let requestHandler = (req, res) => {
  let id = JSON.parse(req.url.slice(10));
  if (req.method === 'GET') {
    if (req.url === `/explores/${id}`) {
      let explores = mongodb.db('explore').collection('explores');
      explores.findOne({ productId: id }, (error, data) => {
        if (error) {
          res.writeHead(404, headers);
          res.end();
        } else {
          res.writeHead(200, headers);
          res.end(JSON.stringify(data));
        }
      });
    }
  }
};

module.exports.requestHandler = requestHandler;
