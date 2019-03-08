const Explores = require('../db/model.js');

let headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10,
  'Content-Type': 'application/json'
};

let requestHandler = (req, res) => {
  let productId = req.url.slice(10);

  if (req.method === 'GET') {
    if (req.url === `/explores/${productId}`) {
      Explores.find({ productId }, (error, docs) => {
        if (error) {
          res.writeHead(404, headers);
        } else {
          let data = JSON.stringify(docs);
          res.writeHead(200, headers);
          res.end(data);
        }
      });
    }
  }
};

module.exports.requestHandler = requestHandler;
