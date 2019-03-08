const MongoClient = require('mongodb').MongoClient;

let headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10,
  'Content-Type': 'application/json'
};

let requestHandler = (req, res) => {
  let id = req.url.slice(10);
  if (req.method === 'GET') {
    if (req.url === `/explores/${id}`) {
      let url = 'mongodb://localhost:27017/explore';
      MongoClient.connect(url, { useNewUrlParser: true }, (error, client) => {
        if (error) {
          console.log(error);
        } else {
          let db = client.db('explore');
          let productId = JSON.parse(id);
          db.collection('explores').findOne({ productId }, (error, data) => {
            if (error) {
              res.writeHead(404, headers);
              res.end();
            } else {
              res.writeHead(200, headers);
              res.end(JSON.stringify(data));
            }
          });
        }
        client.close();
      });
    }
  }
};

module.exports.requestHandler = requestHandler;
