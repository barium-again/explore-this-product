const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://andrew:password@52.26.174.132:27017/explore';
let mongodb;

// const redisClient = require('redis').createClient;
// const redis = redisClient(6379, 'localhost');

MongoClient.connect(url, { useNewUrlParser: true }, (error, db) => {
  if (error) {
    console.log('MongoDB error connection');
  } else {
    console.log('MongoDB connection successful');
    mongodb = db;
  }
});

module.exports = {
  get: (req, res) => {
    let Explores = mongodb.db('explore').collection('explores');
    let productId = JSON.parse(req.params.id);
    console.log(`ID: ${productId}`);
    Explores.findOne({ productId }, (error, data) => {
      if (error) {
        res.status(404).end(error);
      } else {
        res.status(200).send(data);
      }
    });
  }
};
